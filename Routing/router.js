const express = require('express');

const allTodoController = require('../Controller/allTodoController')
const favTodoController = require('../Controller/favTodoController')
const delTodoController = require('../Controller/delTodoController')
const completedTodoController = require('../Controller/completedTodoController')

const router = new express.Router()


router.post('/todos/add',allTodoController.addtodos)

router.get('/todos/userTodo',allTodoController.getTodos)

router.get('/todos/:email',allTodoController.getuserTodos)

router.post('/todos/fav',favTodoController.addFavTodo)

router.post('/todos/del',delTodoController.addDelTodo)

router.post('/todos/completed',completedTodoController.addCompletedTodo)

router.delete('/todos/:id',allTodoController.deleteTodos)

router.get('/todos/fav/get/:email',favTodoController.getFavTodo)

router.get('/todos/del/get/:email',delTodoController.getDelTodo)

router.get('/todos/completedTodo/get/:email',completedTodoController.getCompletedTodo)

router.delete('/todos/delete/:email',delTodoController.delAllTodos)

module.exports = router