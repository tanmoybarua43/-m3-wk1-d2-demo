var express = require('express');
var app = express();
var routerdemo = require('./exp_demo3a.js'); // Ensure the correct filename

app.use('/routerdemo', routerdemo);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
