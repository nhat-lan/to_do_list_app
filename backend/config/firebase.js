const firebase = require('firebase');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTH,
    databaseURL: process.env.FB_URL,
    projectId: "to-do-list-41b06",
    messagingSenderId: process.env.FB_SENDERID
}

firebase.initializeApp(config);

module.exports = firebase;