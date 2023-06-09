const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);

module.exports = app;
