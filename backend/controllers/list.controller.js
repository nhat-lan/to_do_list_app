const db = require('../config/firebase.js');

const listPath = '/list';

// ADD GENERATE RANDOM ID

// GET list by Id
exports.getListByid = ((listId, res) => {
    const ref = db.database().ref(listPath).child(`${listId}`);

    ref.on('value', (snapshot) => {
        res.send(snapshot.val());
    });
});

// POST create a new list
exports.createNewList = ((data, res) => {
    db.database().ref(listPath).child('211').set(data).then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});

// DELETE delete list by id
exports.deleteListByid = ((listId, res) => {
    db.database().ref(listPath).child(`${listId}`).remove().then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});

// UPDATE list by id
exports.updateListData = ((data, listId, res) => {
    db.database().ref(listPath).child(`${listId}`).update(data).then(() => {
        res.status(200).json({ status: 'Updated'});
    });
});