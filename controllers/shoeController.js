const { Router } = require('express');
const router = Router();
const shoeService = require('../services/shoeService.js');

// Home page
router.get('/', (req, res) => { res.render('../views/home.hbs'); });

// Create Shoe Offer
router.get('/create', (req, res) => { res.render('../views/shoes/create'); });
router.post('/create', (req, res) => {
    shoeService.create(req.body, req.user)
        .then((shoe) => {
            console.log(shoe);
            res.redirect('/shoes');
        })
        .catch(error => console.log(error));
});

module.exports = router;