const db = require('../config/firebase.js');

const taskPath = '/tasks';

// GET list by Id
exports.getTaskByid = ((taskId, res) => {
    const ref = db.database().ref(taskPath).child(`${taskId}`);

    ref.on('value', (snapshot) => {
        res.send(snapshot.val());
    });
});

// POST create a new list
exports.createNewTask = ((data, res) => {
    db.database().ref(taskPath).child('216').set(data).then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});

// DELETE delete list by id
exports.deleteTaskByid = ((taskId, res) => {
    db.database().ref(taskPath).child(`${taskId}`).remove().then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});

// UPDATE list by id
exports.updateTaskData = ((data, taskId, res) => {
    db.database().ref(taskPath).child(`${taskId}`).update(data).then(() => {
        res.status(200).json({ status: 'Updated'});
    });
});