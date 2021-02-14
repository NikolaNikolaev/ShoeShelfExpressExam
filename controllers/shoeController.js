const { Router } = require('express');
const router = Router();

// Home page
router.get('/', (req, res) => { res.render('../views/home.hbs'); });

// Create Shoe Offer
router.get('/create', (req, res) => { res.render('../views/shoes/create'); });
router.post('/create', (req, res) => {

});

module.exports = router;