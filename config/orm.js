var connection = require("connection.js");


var orm = {

all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, results) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},

function insertOne() {

}

function update() {

}

module.exports = orm;