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
    console.log(req.body);
    const user = await User.findOneAndUpdate({ email: userEmail }, req.body, {
      new: true,
    });
    console.log(user);
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
// .sort({ cratedAt: 1 })  da chiamare dopo Tour.find

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
    console.log(req.body);
    const tour = await Tour.findOneAndUpdate({ _id: tourId }, req.body, {
      new: true,
    });
    console.log(tour);
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

module.exports = {
  createUser,
  getAllTours,
  createTour,
  getUser,
  updateUser,
  updateTour,
  createChat,
};
