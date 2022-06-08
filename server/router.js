const router = require('express').Router();

//test route
router.get('/test', (req, res) => res.send('working'));

module.exports = router;
