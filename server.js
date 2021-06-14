const express = require('express'); // Requires express

const app = express(); // Assigns variable to express

const PORT = process.env.PORT || 1337; // Assigns port

app.use(express.urlencoded({ extended: true })); // Needed whenever express is used.
app.use(express.json());
app.use(express.static(__dirname + '/public'));// I had to add this line or the app would not work.
// app.use(express.static(__dirname + '/db'))

require('./Routes/htmlRoutes')(app);
require('./Routes/apiRoutes')(app);

app.listen(PORT, () => { // Tells the server to listen on specified port.
    console.log(`App listening on PORT: ${PORT}`);
});