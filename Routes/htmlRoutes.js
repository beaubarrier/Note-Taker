const path = require('path');
// NEED To import express router
// router.get, check expamles
var express = require("express");
var app = express();

// var router = express.Router();
module.exports = (app) => {


    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

}