var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


//Skills Schema
var Skills = new Schema({
  skill_id = ObjectId,
  text: String
})