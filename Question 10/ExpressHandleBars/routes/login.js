var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('login', {
        name: req.session.userName
    });
});

router.post('/', function (req, res) {
    req.session.userName = req.body.userName;
    res.redirect('/');
});

module.exports = router;