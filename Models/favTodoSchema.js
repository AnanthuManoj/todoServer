const mongoose = require('mongoose');

const favTodoSchema = new mongoose.Schema({
    email:{type:String,require:true},
    title:{type:String,require:true},
    description:{type:String,require:true}
})

const favTodos = mongoose.model('favTodos',favTodoSchema)

module.exports = favTodos