
const fs = require('fs');
// const path = require('path');
// need to import db. need to pull from 
const db = require('../db/db.json');

// const notes = require('/notes.html')
// use fs functions to read and write db.json, readfileasync, (inside or outside of module.exports?)
// router? 
console.log(db)
module.exports = (app) => {
    // app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));
    app.get('/api/notes', (req, res) => res.json(db));
    console.log(res + "res")
    console.log(req + "req")
    fs.readFile(db, JSON.stringify(db), err => {
        if (err) {
            console.log(err)
            return
        }
    })

    // app.post('/api/notes', (req, res) => {
    //     console.log(req.body);
    //     db.push(req.body);

    //     res.json(true);

    //     fs.writeFile(db, JSON.stringify(db), err => {
    //         if (err) {
    //             console.log(err)
    //             return
    //         }
    //     })
    // });





    // fs.readFile(db, 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err)
    //         return
    //     }
    //     console.log(data)
    // })




    // JSON.parse(data)

    // console.log(data)
    // fs.writeFile('../notes.html', data, 'utf8');
    // app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
    // fs.writeFile('../public/notes.html');
    // app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

    // console.log("API routes get request");

    // app.all('/', function (req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //     next();
    // });

    // fs.readFile('./db/db.json', "utf8", (error, response) => {

    //     if (error) { throw error }

    //     const exisitingNotes = JSON.parse(response);

    //     console.log(exisitingNotes)

    //     res.json(exisitingNotes);
    //     console.log("API routes get request");


    // res.send(exisitingNotes);
    // res.end();



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



};













    // app.get('/', function (req, res) {
    //     res.send('hello root')
    // });
