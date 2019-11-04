const Task = require('../models/task');
const User = require('../models/user');
const Skill = require('../models/skill');
module.exports = {
  index: async (req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  },

  newTask: async(req,res,next)=>{
    const newTask = new Task(req.body);
    const task = await newTask.save();
    res.status(201).json(task);
  },

  getTask: async(req,res,next)=>{
      const{
          taskId
      } = req.params;
      const task = await Task.findById(taskId);
      console.log('task', task)
  },

  getTaskByUser: async(req,res,next)=>{
    const{
        taskId
        
    } = req.params;
    const task = await Task.findById(taskId);
    console.log('task', task)
},
