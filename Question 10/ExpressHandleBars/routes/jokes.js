var express = require('express');
var router = express.Router();
var jokes = require('./../model/jokes');
var jokesDB = [];

router.get('/', function (req, res, next) {
    var session = req.session;
    if (session.jokesCount) {
        session.jokesCount++;
    } else {
        session.jokesCount = 1;
    }

    jokes.allJokes(function (err, data) {
        if (err) {
            alert(err);
        } else {
            jokesDB = data;
        }
        res.render('jokes', {
            jokes: jokesDB,
            name: session.userName,
            jokesCount: session.jokesCount
        });
    });
});


module.exports = router;