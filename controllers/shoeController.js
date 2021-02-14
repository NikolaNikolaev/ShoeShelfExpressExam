const { Router } = require('express');
const router = Router();

// Home page
router.get('/', (req, res) => { res.render('../views/home.hbs'); });


module.exports = router;