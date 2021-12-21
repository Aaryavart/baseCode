const mongoose = require("mongoose");
const validator = require("validator");

const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
    validate: {
      validator: validator.isEmail,
    },
  },
  subject: {
    type: String,
    required: [true, "Please include the subject!"],
  },
  body: {
    type: String,
    required: [true, "Please include your message!"],
  },
});

const Message = new mongoose.model("Message", schema);

module.exports = Message;
