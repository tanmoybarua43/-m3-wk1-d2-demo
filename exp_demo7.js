var express = require('express');
var app = express();

// Simple request time logger
app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});
 
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    //function/route handler.
    

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);


