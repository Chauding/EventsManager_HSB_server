var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//Role Schema
var Role = new Schema({
  role_id = ObjectId,
  value: String
})