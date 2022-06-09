const mongoose = require('mongoose');
require('./db-connection');

const userSchema = new mongoose.Schema({
  type: String,
  name: String,
  lastName: String,
  email: String,
  password: String,
  rating: Number,
  chats: Array,
  navLinks: Array,
  aboutMe: String,
  img: String, // ❗❗
  myTours: Array,
});

const User = mongoose.model('user', userSchema);

const tourSchema = new mongoose.Schema({
  title: String,
  author: User.schema,
  description: String,
  startAt: Date,
  duration: Number,
  days: Array,
  img: String, // ❗❗
  dashboard: Array,
  reviews: Array,
  createdAt: Date,
});

const Tour = mongoose.model('tour', tourSchema);

const chatSchema = new mongoose.Schema({
  participants: Array,
  msgs: Array,
  createdAt: Date,
});

const Chat = mongoose.model('chat', chatSchema);

const msgSchema = new mongoose.Schema({
  author: User.schema,
  content: String,
  time: Date,
});

const Msg = mongoose.model('msg', msgSchema); // do I even need it ❓❓

const reviewsSchema = new mongoose.Schema({
  author: User.schema,
  content: String,
});

const Review = mongoose.model('review', reviewsSchema);

module.exports = { User, Tour, Chat, Msg, Review };
