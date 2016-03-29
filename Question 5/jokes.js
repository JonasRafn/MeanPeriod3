var connection = require("../model/mongoose");
var mongoDB = connection.get();

function _allJokes(callback) {
    mongoDB.find({}, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
}

function randomJoke(callback) {
    mongoDB.find({}, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data[Math.floor((Math.random() * data.length))]);
    });
}

function addJoke(joke, callback) {
    var db = new mongoDB();
    db.joke = joke.joke;
    db.type = joke.type;
    db.reference = joke.reference;
    db.lastEdited = getCurrentDate();

    // save() will run insert() command of MongoDB.
    // it will add new data in collection.
    db.save(function (err) {
        if (err) {
            callback(err);
        }
        callback(null, "Data added");
    });
}

function deleteJoke(id, callback) {
    mongoDB.findById(id, function (err, data) {
        if (err) {
            callback(err);
        } else {
            mongoDB.remove({_id: id}, function (err) {
                if (err) {
                    callback(err);
                }
                callback(null, "Data associated with " + id + " is deleted");
            });
        }
    });
}

function findJoke(id, callback) {
    mongoDB.findById(id, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

exports.allJokes = _allJokes;
exports.randomJoke = randomJoke;
exports.addJoke = addJoke;
exports.deleteJoke = deleteJoke;
exports.findJoke = findJoke;
//exports.editJoke ;

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}
