// Required modules
const fs = require('fs'); // File System. Used for reading and writing to files.
const path = require('path');// Path is used to 
const uniqid = require('uniqid'); // Uniqid Module is used to assign id's to the individual notes
const dbPath = path.join(__dirname, '../db/db.json');


module.exports = (app) => {


    app.get('/api/notes', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) { throw err; }
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) { throw err; }
            var savedNotes = JSON.parse(data)
            var note = req.body;
            note.id = uniqid();
            savedNotes.push(note);
            res.json(true);
            fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes), err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        });
    });

    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const noteDelete = JSON.parse(fs.readFileSync(dbPath));
        let noteFilter = noteDelete.filter(function (e) {
            return e.id != id;
        });
        fs.writeFileSync("./db/db.json", JSON.stringify(noteFilter));
        res.json("Note deleted!");
    })
}
