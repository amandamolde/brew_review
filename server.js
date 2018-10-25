const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set up middleware
app.use(bodyParser.urlencoded({extended: false}));

app.listen(9000, () => {
    console.log('API is listening on port 9000');
});