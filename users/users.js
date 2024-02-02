const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pagestesting");
const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("userModel", userSchema);
