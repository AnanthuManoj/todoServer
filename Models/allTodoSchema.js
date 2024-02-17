const mongoose = require('mongoose')

const allTodoSchema = new mongoose.Schema({
    email:{type:String,require:true},
    title:{type:String,require:true},
    description:{type:String,require:true}
})

const alltodos = mongoose.model('alltodos',allTodoSchema)

module.exports = alltodos