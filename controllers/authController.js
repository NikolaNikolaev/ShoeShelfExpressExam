const { Router } = require('express');
const router = Router();

const { COOKIE_NAME } = require('../config/config.js');
const authService = require('../services/authService.js');

const isGuest = require('../middlewares/isGuest.js');
const isAuthenticated = require('../middlewares/isAuthenticated.js');

// Register
router.get('/register', isGuest, (req, res) => { res.render('../views/auth/register.hbs'); });
router.post('/register', isGuest, async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('../views/auth/register.hbs', { error });
    };
});

// Login
router.get('/login', isGuest, (req, res) => { res.render('../views/auth/login.hbs'); });
router.post('/login', isGuest, async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/shoes');
    } catch (error) { res.render('../views/auth/login.hbs', { error }); };
});

// Logout
router.get('/logout', isAuthenticated, (req, res) => {
   res.clearCookie(COOKIE_NAME);
   res.redirect('/shoes');
});

module.exports = router;