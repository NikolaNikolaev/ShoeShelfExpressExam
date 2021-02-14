const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('../views/home.hbs');
});

module.exports = router;