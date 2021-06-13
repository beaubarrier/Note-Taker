const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');
const dbPath = path.join(__dirname, '../db/db.json');


module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));


    app.post('/api/notes', (req, res) => {
        var note = req.body;

        note.id = uniqid();
        db.push(note);
        res.json(true);
        console.log(req.params.id)
        fs.writeFileSync("./db/db.json", JSON.stringify(db), err => {
            if (err) {
                console.error(err)
                return
            }
        })

    });

    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id;
        console.log("++++++" + noteId)
        const noteToDelete = JSON.parse(fs.readFileSync(dbPath));
        let filteredNotes = noteToDelete.filter(function (el) {
            return el.id != noteId;
        });

        // Why isnt it writing to the html???
        fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes))
        res.json("Note deleted!")
    })
}
