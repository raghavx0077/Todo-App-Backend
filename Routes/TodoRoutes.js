const express = require ('express');
const router =express.Router();
const TodoController=require('../controller/TodoController')
const Todovalidator=require('../middleware/Todovalidator')

router.post('/createTask',Todovalidator,TodoController.createTask);
router.get('/getTasks',TodoController.getTasks);
router.get('/getTask/:id',TodoController.getTaskbyID);
router.put('/updateTask/:id',TodoController.updateTaskbyID);
router.delete('/deleteTask/:id',TodoController.deleteTask);

module.exports=router;