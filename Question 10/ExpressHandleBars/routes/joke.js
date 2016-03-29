var express = require('express');
var router = express.Router();
var jokes = require('./../model/jokes');

router.get('/:id', function (req, res) {
    var joke = {};
    var id = req.params.id;
    jokes.findJoke(id, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            joke = data;
            res.render('joke', {
                joke: joke
            });
        }
    });
});

module.exports = router;