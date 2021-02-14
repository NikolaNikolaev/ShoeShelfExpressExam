const { Router } = require('express');
const router = Router();

const { COOKIE_NAME } = require('../config/config.js');
const authService = require('../services/authService.js');

// Register
router.get('/register', (req, res) => { res.render('../views/auth/register.hbs'); });
router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('../views/auth/register.hbs', { error });
    };
});

// Login
router.get('/login', (req, res) => { res.render('../views/auth/login.hbs'); });
router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/shoes');
    } catch (error) { res.render('../views/auth/login.hbs', { error }); };
});


module.exports = router;