var express = require('express');
var router = express.Router();
var jokes = require('./../model/jokes');

router.get('/', function (req, res) {
    var session = req.session;
    if (session.jokeCount) {
        session.jokeCount++;
    } else {
        session.jokeCount = 1;
    }
    var joke = {};
    jokes.randomJoke(function (err, data) {
        if (err) {
            alert(err);
        } else {
            joke = data;
        }
        res.render('randomJoke', {
            joke: joke,
            jokeCount: session.jokeCount
        });
    });
});


module.exports = router;