const mongoose = require('mongoose');

const completedTodoSchema = new mongoose.Schema({
    email:{type:String,require:true},
    title:{type:String,require:true},
    description:{type:String,require:true}
})

const completedTodos = mongoose.model('completedTodos',completedTodoSchema)

module.exports = completedTodos