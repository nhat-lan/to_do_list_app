const db = require('../config/firebase.js');

// global var
const accountPath = '/accounts';

var id = Math.random().toString(36).substring(7);

// CREATE ACCOUNT
exports.createNewAccount = ((data, res) => {
    db.database().ref(accountPath).child(data.username).set(data).then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});

// UPDATE ACCOUNT 
exports.updateAccountData = ((data, accountId, res) => {
    db.database().ref(accountPath).child(`${accountId}`).update(data).then(() => {
        res.status(200).json({ status: 'Updated'});
    });
});

exports.getAccountByid = ((accountId, res) => {
    const ref = db.database().ref(accountPath).child(`${accountId}`);

    ref.on('value', (snapshot) => {
        res.send(snapshot.val());
    });
});

exports.deleteAccountByid = ((accountId, res) => {
    db.database().ref(`${accountPath}/${accountId}`).remove().then(response => {
        res.status(200).json({ status: 'Success'});
    }).catch(err => {
        res.status(500).json(err);
    });
});
