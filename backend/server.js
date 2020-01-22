const express = require('express'); //import express 
const dotenv = require('dotenv');
const bodyParse = require('body-parser');
const accountRoute = require('./routes/account/account.route.js')
const listRoute = require('./routes/list/list.route.js')
const taskRoute = require('./routes/task/task.route.js')



const app = express();
dotenv.config();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// TEST
app.get('/test', (req, res) => {
  res.status(200).json({result: 'Test'});
});

app.use('/', accountRoute)
app.use('/', listRoute )
app.use('/', taskRoute )
// start server on port: 8080
const server = app.listen(process.env.PORT || 8080, () => {
  var http = require("http");
  setInterval(function() {
      http.get("http://to-do-list-app-4261.herokuapp.com/keepawake");
  }, 3000); // every 5 minutes (300000)
  console.log(`Running on port: ${process.env.PORT}`);
});