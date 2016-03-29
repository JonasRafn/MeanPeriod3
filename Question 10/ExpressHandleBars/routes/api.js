var express = require('express');
var router = express.Router();
var jokes = require('./../model/jokes');


router.get('/randomJoke/random', function (req, res, next) {
    res.json({joke: jokes.getRandomJoke()});
});

router.get('/jokes', function (req, res, next) {
    res.json({jokes: jokes.allJokes});
});

router.post('/randomJoke', function (req, res, next) {
    var joke = {joke: req.body.joke};
    jokes.addJoke(req.body.joke);
    res.json(joke);
});


module.exports = router;