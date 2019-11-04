const User = require('../models/user');
const Skill = require('../models/skill');
module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  },

  getUser: async (req, res, next) => {
    const {
      userId
    } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },

  replaceUser: async (req, res, next) => {
    // enforce that req,body must ocntain all fields
    const {
      userId
    } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({
      success: true
    });
  },

  updateUser: async (req, res, next) => {
    // req.body may contain any number of fields
    const {
      userId
    } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({
      success: true
    });
  },

  getRole: async (req, res, next) => {},

  getUserSkills: async (req, res, next) => {
    const {
      userId
    } = req.params;
    const user = await User.findById(userId)
    console.log('user', user)
  },

  getUserEvents: async (req, res, next) => {
    const {
      userId
    } = req.params;
    const user = await User.findById(userId)
    console.log('user', user)
  },

  newUserSkill: async (req, res, next) => {
    const newSkill = new Skill(req.body);
    console.log('newSkill', newSkill)
  }
}