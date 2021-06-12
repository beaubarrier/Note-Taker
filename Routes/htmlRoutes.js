const path = require('path');
// NEED To import express router
// router.get, check expamles
var express = require("express");
var app = express();

var router = express.Router();
module.exports = (app) => {


    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

}