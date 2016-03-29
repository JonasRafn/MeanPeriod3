var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jokes');

var get = function () {
    var jokeSchema = {
        joke: {type: String, required: true},
        type: {type: Array},
        reference: {
            author: String,
            link: String
        }
    };
    return mongoose.model('jokes', jokeSchema);
};

module.exports.get = get;