const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const setupExpress = (app) => {
    // Set Static Folder
    app.use('/static', express.static('public'));
    // Set View Engine
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    // Set Body Parser
    app.use(express.urlencoded({ extended: true }));
    // Set Cookie Parser
    app.use(cookieParser());
};

module.exports = setupExpress;