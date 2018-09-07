require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  ctrl = require('./controller.js');
//auth_ctrl = require('./auth_controller.js');
//session = require('express-session')

const app = express()
app.use(bodyParser.json());
PORT = 4000;

const {DB_CONNECTION_STRING} = process.env

// app.use(session({
//   secret: 'secretkey1010101',
//   resave: false,
//   saveUninitialized: true
// }))


app.get('/api/houses', ctrl.read);
app.post('/api/house', ctrl.create);
// app.put('/api/house/:id', ctrl.updateHouse);
app.delete('/api/house/:id', ctrl.delete);

// app.post('/api/login', auth_ctrl.login);
//app.post('/api/register', auth_ctrl.register);


massive(DB_CONNECTION_STRING)
.then(db => {
    console.log('Connect to Database');
  app.set('db', db);
  
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
