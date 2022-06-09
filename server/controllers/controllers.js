const { User, Tour } = require('../models/schema');

//// USER

const createUser = async (req, res) => {
  try {
    console.log('body ', req.body);
    const user = await User.create(req.body);
    res.status(201);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    console.log('back 1', req.params);
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail });
    console.log('back 2');
    res.send(user);
    console.log('back 3', user);
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
    await Tour.create(req.body);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getAllTours, createTour, getUser };
