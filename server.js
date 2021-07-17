const express = require('express'); // Requires express

const app = express();

const PORT = process.env.PORT || 1337; // Assigns port

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

require('./Routes/htmlRoutes')(app);
require('./Routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});