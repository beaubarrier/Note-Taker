const PORT = process.env.PORT || 1337;
const express = require('express');
const app = express();

// var router = express.Router();
// const apiRoutes = require('./routes/apiRoutes')
// const htmlRoutes = require('./routes/htmlRoutes');

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)
require('./db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


