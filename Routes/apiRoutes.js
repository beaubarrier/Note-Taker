// var express = require('express')
// var app = express()
// var notesHTML = require('./htmlRoutes')
// const { response } = require('express');
// const path = require('path');
// const notesHTML = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    // console.log("API routes get request");
    // "/api/notes" 
    app.get('/api/notes', (req, res) => {
        // console.log("All notes in file ", notesHTML);
        fs.readFile('./db/db.json', "utf8", (error, response) => {

            if (error) { throw error }

            const exisitingNotes = JSON.parse(response);

            console.log(exisitingNotes)

            res.json(exisitingNotes);
            console.log("API routes get request");

        });

        // app.post('/notes', (req, res) => {
        //     console.log("New note", req.body)
        //     JSON.parse(response);
        //     const reqBody = req.body;
        //     fs.writeFile(notesHTML)
        // res.send('hello notes')
        //read JSON 
        // create anew variable req.body 
        // fs.writeFile()

        // const postNote =  fs.readFile('./db/db.json')
        // })

    });

};













    // app.get('/', function (req, res) {
    //     res.send('hello root')
    // });
