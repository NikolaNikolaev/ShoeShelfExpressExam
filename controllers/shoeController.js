const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('../views/home/guest.hbs');
});

module.exports = router;