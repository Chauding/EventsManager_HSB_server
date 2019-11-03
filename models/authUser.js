var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//User Schema
var UserSchema = new Schema({
  user_id: ObjectId,
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