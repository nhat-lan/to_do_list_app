# to_do_list_app

A simple mobile application for Iphone users to let them make a list of tasks that need to be reminded.

The Features
Pick a date from callendar
Add new task
Edit task
Delete single task
Delete completed tasks
Delete all tasks

The technologies used:
Swift 
JavaScript
Firebase

Firebase: https://console.firebase.google.com/u/0/project/to-do-list-41b06/database/to-do-list-41b06/data
Heroku host server dashboard: http://to-do-list-app-4261.herokuapp.com/.
To test our server, please visit: http://to-do-list-app-4261.herokuapp.com/accounts/216 which will fetch data from Firebase. The only issue with Heruko is that it would go to deactivation mode every ~30 mins, so in order to keep Heroku node app from sleeping, I have followed tutorials from this website (source: https://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping/) to make an auto call REQUEST every five minutes to keep it awake. 

Here are the steps to run this app: 
Clone it from our GitHub link (link is attached above) 
In the backend folder, create a file name .env and insert these lines 
Spin up the Backend Server by running: npm install ; npm start
Install Xcode software (can download from App Store) and open the project, then run the simulator. 
