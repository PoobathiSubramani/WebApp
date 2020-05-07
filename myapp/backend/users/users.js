const express = require("express");
const usersRouter = express.Router();
//const userSchema = require('./user-schema')
const signupSchema = require('../users/signup-schema');
const url = require("url");

usersRouter.get('',(req, res, next) => {
  var queryUsers = signupSchema.find();
  queryUsers.exec((err, docs) => {
    if(err) {
      console.log('not able to query db');
      res.status(500).json({message:"not able to query db"})
    } else {
      if (docs.length===0) {
        console.log('No users found');
        res.status(200).json({message:"No Users found", users: null})
        //res.write({message: "no users found"});
      } else {
        console.log('response from backend: ', docs);
        res.status(200).json({message: "Users Found", users: docs});
      }
    }
  });
  /*
  signupSchema.find().then(userslist => {
    console.log(userslist);
  })
  */
  //next();
})

usersRouter.delete('/:email', (req, res, next) => {

  console.log("id for deletion: ",req.params.userid);
  signupSchema.deleteOne({email: req.params.email})
    .then((dbres) => {
      res.status(200).json({message: "deletion successful"});
    });
})

module.exports = usersRouter;
