const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
require('./db-connection');

const userSchema = new mongoose.Schema({
  type: String,
  name: String,
  email: String,
  rating: Number,
  chats: Array,
  navLinks: Array,
  aboutMe: String,
  img: String, // ❗❗
  myTours: Array,
});

const tourSchema = new mongoose.Schema({
  title: String,
  description: String,
  startAt: Timestamp,
  duration: Number,
  days: Array,
  img: String, // ❗❗
  dashboard: Array,
  reviews: Array,
});

const chatSchema = new mongoose.Schema({
  participants: Array,
  msgs: Array,
});

const msgSchema = new mongoose.Schema({
  author: User,
  content: String,
  time: Timestamp,
});

const reviewsSchema = new mongoose.Schema({
  author: User,
  content: String,
});

const User = mongoose.model('user', userSchema);
const Tour = mongoose.model('tour', tourSchema);
const Chat = mongoose.model('chat', chatSchema);
const Msg = mongoose.model('msg', msgSchema); // do I even need it ❓❓
const Review = mongoose.model('tour', reviewsSchema);

module.exports = { User, Tour, Chat, Msg, Review };
