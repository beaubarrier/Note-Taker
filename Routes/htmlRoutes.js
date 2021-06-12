const path = require('path');
// NEED To import express router
module.exports = (app) => {


    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

}