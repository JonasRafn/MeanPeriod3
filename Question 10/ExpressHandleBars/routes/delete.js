var express = require('express');
var router = express.Router();
var jokes = require('./../model/jokes');


router.get('/:id', function (req, res) {
    var id = req.params.id;
    jokes.deleteJoke(id, function (err, data) {
        if (err) {
            alert(err);
        }
        res.redirect('/jokes');
    });
});


module.exports = router;