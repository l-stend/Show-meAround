const router = require('express').Router();
const { createUser } = require('./controllers/controllers');

//test route
router.get('/test', (req, res) => res.send('working'));
router.post('/register', createUser);

module.exports = router;
