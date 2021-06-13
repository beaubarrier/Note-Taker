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
        fs.writeFile("./db/db.json", JSON.stringify(db), err => {
            if (err) {
                console.error(err)
                return
            }
        })

    });

    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id;
        const noteToDelete = JSON.parse(fs.readFileSync(dbPath));
        let filteredNotes = noteToDelete.filter(function (e) {
            return e.id != noteId;
        });
        fs.writeFileSync(dbPath, JSON.stringify(filteredNotes));
        res.json("Note deleted!")
    })

}

