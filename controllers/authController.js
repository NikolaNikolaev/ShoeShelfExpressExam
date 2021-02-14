const { Router } = require('express');
const router = Router();

const authService = require('../services/authService.js');

// Register
router.get('/register', (req, res) => { res.render('../views/auth/register.hbs'); });
router.post('/register', (req, res) => {
    authService.register(req.body)
        .then((user) => {
            console.log('in then');
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        });
});

// Login
router.get('/login', (req, res) => { res.render('../views/auth/login.hbs'); });


module.exports = router;