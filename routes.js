const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController.js');
const shoeController = require('./controllers/shoeController.js');

router.use('/', homeController);
router.use('/shoes', shoeController);
router.use('*', (req, res) => res.send('Not Found'));

module.exports = router;