const router = require('express').Router();

router.get('/test', (req, res) => res.send('working'));

module.exports = router;
