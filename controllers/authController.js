const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const { SECRET, COOKIE_NAME } = require('../config/config.js');
const authService = require('../services/authService.js');

// Register
router.get('/register', (req, res) => { res.render('../views/auth/register.hbs'); });
router.post('/register', async (req, res) => {
    try {
        const { email, _id } = await authService.register(req.body);
        const token = jwt.sign({ email, _id }, SECRET);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('../views/auth/register.hbs', { error });
    };
});

// Login
router.get('/login', (req, res) => { res.render('../views/auth/login.hbs'); });


module.exports = router;