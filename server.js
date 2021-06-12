const PORT = process.env.PORT || 1337;
const express = require('express');
const app = express();

// var router = express.Router();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


