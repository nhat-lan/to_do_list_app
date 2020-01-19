const db = require('../config/firebase.js');

const testPath = '/tests';

exports.createNewTest = ((data, res) => {
    db.database().ref(testPath).child('21321321').set(data).then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});