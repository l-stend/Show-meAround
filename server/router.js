const router = require('express').Router();
const {
  createUser,
  getAllTours,
  createTour,
  getUser,
  updateUser,
  updateTour,
  createChat,
  updateChat,
  getAllChats,
} = require('./controllers/controllers');

///USER
router.post('/register', createUser);
router.get('/user/:email', getUser);
router.patch('/user/:email', updateUser);

///TOUR
router.get('/tours', getAllTours);
router.post('/tour', createTour);
router.patch('/tour/:id', updateTour);

/// CHAT
router.get('/chats', getAllChats);
router.post('/chat', createChat);
router.patch('/chat/:id', updateChat);

module.exports = router;
