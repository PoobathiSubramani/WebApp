const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//const UserSchema = require('./users/user-schema');

const signupRouter = require('./signup')
const usersRouter = require('../backend/users/users')

//this is stored in nodemon.json file. To get this effect, start the nodemon again. not restarting.
const DBPWD = process.env.MONGODB_PWD;
const DBUSER = process.env.MONGODB_USR;
const CLUSTER = process.env.MONGODB_CLUSTER;
const DBNAME = process.env.MONGODB_DBNAME;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" + DBUSER + ":" + DBPWD + "@" + CLUSTER + "/" + DBNAME + "?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("DB Connection failed!");
  })

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //to allow cross-origin requests
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader( //to allow different methods
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.get("", (req, res, next) => {
  res.send({message: "hello Boopathi " + dbpwd});
})
/*
app.post("/val", (req, res, next) => {
  console.log('inside the server post request: ', req.body.message);
  userName = req.body.message;
  const usr = new UserSchema({ //instantiate UserSchema
    _id: new mongoose.Types.ObjectId,
    name: userName //pass the name
  })
  usr.save().then(result => { //save record. after the Save, send the response back
    res.send({message: "message posted succesfully, " + userName});
  })
})
*/

app.use('/signup', signupRouter);
app.use('/users', usersRouter);
module.exports = app; //exporting the app
