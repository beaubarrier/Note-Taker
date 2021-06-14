const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
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
            var mySavedNotes = JSON.parse(data)
            var note = req.body;
            note.id = uniqid();
            mySavedNotes.push(note);
            res.json(true);
            fs.writeFileSync("./db/db.json", JSON.stringify(mySavedNotes), err => {
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
