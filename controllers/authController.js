const { Router } = require('express');
const router = Router();

// Register
router.get('/register', (req, res) => { res.render('../views/auth/register.hbs'); });
router.post('/register', (req, res) => {

});

// Login
router.get('/login', (req, res) => { res.render('../views/auth/login.hbs'); });


module.exports = router;