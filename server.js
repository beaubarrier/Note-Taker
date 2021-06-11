const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//settp the rotes 
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


