var express = require("express");

var burger = require("models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) { 
        var bObject = {
            burgers: data
        };
        console.log(bObect)
        res.render("index", bObject)
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name", devoured
    ], [
        req.body.name, req.body.devoured
});

router.put("/api/burgers/:id", function(req, res) {

});

router.delete("/api/burgers/:id", function(req, res) {

});

module.exports = router;
