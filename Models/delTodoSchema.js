const mongoose = require('mongoose')

const delTodoSchema = new mongoose.Schema({
    email:{type:String,require:true},
    title:{type:String,require:true},
    description:{type:String,require:true}
})

const delTodos = mongoose.model('delTodos',delTodoSchema)

module.exports = delTodos