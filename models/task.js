var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//Task Schema
var Task = new Schema({
  _id: ObjectId,
  title: String,
  description: String,
  user_id: ObjectId,
  Skills: [{
    skill_id: ObjectId
  }],
  Completed: Boolean
})