var express = require('express');
var router = express.Router();
var jokes = require('./../model/jokes');


router.get('/', function (req, res, next) {
    var session = req.session;
    if (session.storeJokeCount) {
        session.storeJokeCount++;
    } else {
        session.storeJokeCount = 1;
    }
    res.render('add', {
        jokes: jokes.allJokes,
        name: session.userName,
        storeJokeCount: session.storeJokeCount
    });
});


module.exports = router;