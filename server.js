const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    bodyParser = require('body-parser'),
    pug = require('pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Setup CORS
app.all('*', require('./cors.js')());

require('./seo/prerender.js')(app, pug);

// This error handler must be below any other app.use()
// as Express documentation recommends it.
require('./error.handler.js')(app);

server.listen('3302', () => {
    console.log('Connected to server');
});