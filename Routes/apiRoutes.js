const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const dbPath = path.join(__dirname, '../db/db.json');


module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));


    app.post('/api/notes', (req, res) => {
        var note = req.body;
        note.id = uniqid();
        db.push(note);
        res.json(true);
        fs.writeFileSync("./db/db.json", JSON.stringify(db), err => {
            if (err) {
                console.error(err)
                return
            }
        })
    });

    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        console.log("=====" + req.params.id);
        console.log("++++++" + id);
        const noteDelete = JSON.parse(fs.readFileSync(dbPath));
        let noteFilter = noteDelete.filter(function (e) {
            return e.id != id;
        });

        // Why isnt it writing to the html???
        fs.writeFileSync("./db/db.json", JSON.stringify(noteFilter));
        res.json("Note deleted!");
    })
}
