var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//Event Schema
var Event = new Schema({
  event_id: ObjectId,
  title: String,
  description: String,
  toDateTime: Date,
  fromDateTime: Date,
  Staff: [{
    user_id: ObjectId
  }],
  tasks: [{
    task_id: ObjectId
  }]

})