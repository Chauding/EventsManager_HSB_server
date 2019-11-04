var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//User Schema
var UserSchema = new Schema({
  UserId: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  role: {
    role_id: ObjectId,
  },
  Calendar: [{
    event_id: ObjectId,
  }],
  Skills: [{
    skill_id: ObjectId,
  }]
})

module.exports = mongoose.model('User', UserSchema);

//Event Schema
var EventSchema = new Schema({
  event_id: ObjectId,
  title: String,
  description: String,
  toDateTime: Date,
  fromDateTime: Date,
  Staff: [{
    user_id: ObjectId,
    ref: User
  }],
})
module.exports = mongoose.model('Event', EventSchema);

//Task Schema
var TaskSchema = new Schema({
  _id: ObjectId,
  title: String,
  description: String,
  user_id: ObjectId,
  Skills: [{
    skill_id: ObjectId
  }],
  
  Completed: Boolean
})
module.exports = mongoose.model('Task', TaskSchema);

//Skills Schema
var SkillSchema = new Schema({
  skill_id = ObjectId,
  text: String
})
module.exports = mongoose.model('Skill', SkillSchema);

//Role Schema
var RoleSchema = new Schema({
  role_id = ObjectId,
  value: String
})
module.exports = mongoose.model('Role', RoleSchema);