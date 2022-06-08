const router = require('express').Router();
const {
  createUser,
  getAllTours,
  createTour,
} = require('./controllers/controllers');

//test route
router.get('/test', (req, res) => res.send('working'));
router.post('/register', createUser);
router.get('/tours', getAllTours);
router.post('/tours', createTour);
// router.get('/chat', getChats);
// router.post('/chat', createChat);

module.exports = router;
