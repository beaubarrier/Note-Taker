
const fs = require('fs');
// need to import db. need to pull from
// think pulling from json obj.
// use fs functions to read and write db.json, readfileasync,
// all makes 0 sense to me.

module.exports = (app) => {


    app.get('/api/notes', (req, res) => res.json(characters));
    fs.readFile('../../db/db.json')
    // app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
    res.send(JSON.parse(data));
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
