require('dotenv').config({path:'.env'});
const Express = require("express");
const BodyParser = require("body-parser");
const routes = require('./routes/routes');
var cors = require('cors');
var app = Express();

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true}));

app.use('/', routes);

module.exports = app;