var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//User Schema
var User = new Schema({
    user_id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    role:{
        role_id: ObjectId,
    },
    Calendar: [{
        event_id: ObjectId,
    }],
    Skills: [{
        skill_id: ObjectId,
    }] 
})

//Skills Schema
var Skills = new Schema({
    skill_id = ObjectId,
    text: String
})

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

//Role Schema
var Role = new Schema({
    role_id = ObjectId,
    value: String
})

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

