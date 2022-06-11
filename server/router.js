const router = require('express').Router();
const {
  createUser,
  getAllTours,
  createTour,
  getUser,
  updateUser,
  updateTour,
} = require('./controllers/controllers');

///USER
router.post('/register', createUser);
router.get('/user/:email', getUser);
router.patch('/user/:email', updateUser);

///TOUR
router.get('/tours', getAllTours);
router.post('/tour', createTour);
router.patch('/tour/:id', updateTour);
// router.get('/chat', getChats);
// router.post('/chat', createChat);

module.exports = router;
