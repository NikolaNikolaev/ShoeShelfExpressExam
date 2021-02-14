const { Router } = require('express');
const router = Router();

// Register
router.get('/register', (req, res) => { res.render('../views/auth/register.hbs'); });


module.exports = router;