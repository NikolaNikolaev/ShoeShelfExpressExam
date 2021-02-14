const express = require('express');
const handlebars = require('express-handlebars');

const setupExpress = (app) => {
    // Set Static Folder
    app.use('/static', express.static('public'));
    // Set View Engine
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    // Set Body Parser
    app.use(express.urlencoded({ extended: true }));
};

module.exports = setupExpress;