const mongoose = require("mongoose");

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/mydb");

// acruie the connection
const db = mongoose.connection;

//error;
db.on("error", console.error.bind(console, "error connecting"));

db.once("open", () => {
  console.log("You are connected to database.");
});

module.exports = db;
