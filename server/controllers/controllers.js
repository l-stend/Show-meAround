const { User, Tour, Chat } = require('../models/schema');

//// USER

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail });
    res.send(user);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const updateUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await User.findOneAndUpdate({ email: userEmail }, req.body, {
      new: true,
    });
    res.send(user);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

//// TOURS

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    res.send(tours);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.send(tour);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
};

const updateTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    const tour = await Tour.findOneAndUpdate({ _id: tourId }, req.body, {
      new: true,
    });
    res.send(tour);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

///// CHAT
const createChat = async (req, res) => {
  try {
    const chat = await Chat.create(req.body);
    res.send(chat);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
};

const updateChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findOneAndUpdate({ id: chatId }, req.body, {
      new: true,
    });
    res.send(chat);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({});
    res.send(chats);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  createUser,
  getAllTours,
  createTour,
  getUser,
  updateUser,
  updateTour,
  createChat,
  updateChat,
  getAllChats,
};
