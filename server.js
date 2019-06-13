var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var template = require("consolidate");
var path = require('path');
var url = require("url");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.engine("handlebars", template.handlebars);
app.set("view engine", "handlebars");
app.set("views", path.json(__dirname, "views"));
