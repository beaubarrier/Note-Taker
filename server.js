const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
// const cors = require('cors')
// const path = require('path');
// const fs = require('fs');
// const http = require('http');

const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

// app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


