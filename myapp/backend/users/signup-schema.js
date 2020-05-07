const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  _id: String,
  email: String,
  password: String
})

module.exports = mongoose.model("Signedup_User", signupSchema);
//UserName - the name of the collection
