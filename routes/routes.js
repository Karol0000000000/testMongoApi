const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home').home;
const postTasks = require('../controllers/postTasks').postTasks;
const getTasks = require('../controllers/getTasks').getTasks;
const getTaskByName = require('../controllers/getTaskByName').getTaskByName;
const postTask = require('../controllers/postTask').postTask;
const deleteTask = require('../controllers/deleteTask').deleteTask;
const updateTask = require('../controllers/updateTask').updateTask;

router.get('/', homeController);
//post array of tasks
router.post("/tasks", postTasks);
//get all tasks
router.get("/tasks", getTasks);
//post one task
router.post("/task", postTask)
//get task by name
router.get("/task/:name", getTaskByName);
//delete task
router.delete("/task", deleteTask);
//update task
router.patch("/task", updateTask);

module.exports = router;