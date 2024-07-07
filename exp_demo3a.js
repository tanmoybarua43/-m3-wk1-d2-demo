var express = require('express');
var router = express.Router();

router.get('/home', function(req, res) {
    res.send("Hello World!");
});

router.post('/home', function(req, res) {
    res.send("You just called the post method at '/home'!\n");
});

// Export this router to use in exp_demo3b.js
module.exports = router;
