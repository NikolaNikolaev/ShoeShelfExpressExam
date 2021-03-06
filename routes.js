const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController.js');
const shoeController = require('./controllers/shoeController.js');
const authController = require('./controllers/authController.js');

router.use('/', homeController);
router.use('/shoes', shoeController);
router.use('/auth', authController);
router.use('*', (req, res) => res.send('Not Found'));

module.exports = router;