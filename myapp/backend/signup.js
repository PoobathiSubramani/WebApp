const express = require("express")
const signupRouter = express.Router();
const signupSchema = require('./users/signup-schema');

signupRouter.post('', (req, res, next) => {
  console.log("request body", req.body);
  /*
  const signup = {
    _id: null,
    email: req.body.signupInfo.email,
    password: req.body.signupInfo.password
  }
  */
  const newUser = new signupSchema( {
    _id: null,
    email: req.body.signupInfo.email,
    password: req.body.signupInfo.password
  })
  newUser.save().then(result => {
    res.send({message: "Added successfully. Welcom " + req.body.signupInfo.email});
  })
})

module.exports = signupRouter;
