const { Router } = require('express');
const router = Router();

const shoeService = require('../services/shoeService.js');
const isAuthenticated = require('../middlewares/isAuthenticated.js');

// Home page
router.get('/', (req, res) => {
    shoeService.getAll()
        .then((shoes) => { res.render('../views/home.hbs', { shoes }); })
        .catch(error => console.log(error));
});

// Create Shoe Offer
router.get('/create', isAuthenticated, (req, res) => { res.render('../views/shoes/create'); });
router.post('/create', isAuthenticated, (req, res) => {
    shoeService.create(req.body, req.user)
        .then(() => { res.redirect('/shoes'); })
        .catch(error => { res.render('../views/shoes/create.hbs', { error }); });
});

// Shoe Offer Details
router.get('/:shoeOfferId/details', isAuthenticated, async (req, res) => {
    // Check if the user is creator of the shoe offer
    const shoeOffer = await shoeService.getOne(req.params.shoeOfferId);
    const isCreator = (shoeOffer.creator == req.user.email);
    // Check if the user already bought the shoes
    const hasUserBoughtShoes = (shoeOffer.buyers.find(userId => { return userId == req.user._id }));
    res.render('../views/shoes/details.hbs', { ...shoeOffer, isCreator, hasUserBoughtShoes });
});

// Buy Shoes
router.get('/:shoeOfferId/buy', isAuthenticated, (req, res) => {
    shoeService.buyShoes(req.params.shoeOfferId, req.user._id)
        .then(() => { res.redirect(`/shoes/${req.params.shoeOfferId}/details`); })
        .catch(error => console.log(error));
});


module.exports = router;