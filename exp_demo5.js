var express = require('express');
var app = express();

app.get('/booking/:bookingId', function(req, res) {
    res.send(req.params);
});

app.listen(3000);
