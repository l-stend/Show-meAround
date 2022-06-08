const { User } = require('../models/schema');

const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser };
