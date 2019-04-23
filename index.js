var server = require('./modules/server');
var express = require('express');
var app = express();

app.use(express.static('css'));

server.start();