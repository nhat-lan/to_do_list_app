const router = require('express').Router();
const taskController = require('../../controllers/task.controller.js');

router.route('/task')
    // POST create a new task
    .post((req, res) => {
        taskController.createNewTask(req.body, res);
    });

router.route('/task/:taskId')    
    // GET task by ID
    .get((req, res) => {
        taskController.getTaskByid(req.params.taskId, res);
    })
    // PUT update a task by ID
    .put((req, res) => {
        taskController.updateTaskData(req.body, req.params.taskId, res);
    })
    // DELETE a task by ID
    .delete((req, res) => {
        taskController.deleteTaskByid(req.params.taskId, res);
    });

module.exports = router;