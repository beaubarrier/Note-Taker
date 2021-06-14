const path = require('path');

module.exports = (app) => {

    app.get('/notes', (req, res) => { // When /notes is hit, it will return notes.html
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/', (req, res) => { // When root is hit, returns index.html
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // app.get('*', (req, res) => { // Hits this route if none other is specified.
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
}




