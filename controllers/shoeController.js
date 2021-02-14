const { Router } = require('express');
const router = Router();
const shoeService = require('../services/shoeService.js');

// Home page
router.get('/', (req, res) => {
    shoeService.getAll()
        .then((shoes) => { res.render('../views/home.hbs', { shoes }); })
        .catch(error => console.log(error));
});

// Create Shoe Offer
router.get('/create', (req, res) => { res.render('../views/shoes/create'); });
router.post('/create', (req, res) => {
    shoeService.create(req.body, req.user)
        .then(() => { res.redirect('/shoes'); })
        .catch(error => { res.render('../views/shoes/create.hbs', { error }); });
});



module.exports = router;