var express = require('express');
var jokes = require('./../model/jokes');
var router = express.Router();


router.post('/', function (req, res, next) {
    var newJoke = {
        joke: req.body.joke,
        type: [req.body.type],
        reference: {
            author: req.body.author,
            link: req.body.link
        }

    };
    jokes.addJoke(newJoke, function (err, data) {
        if (err) {
            alert(err);
        } else {
            res.redirect('/add');
        }
    });
});


module.exports = router;