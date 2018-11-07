let express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.statis("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

