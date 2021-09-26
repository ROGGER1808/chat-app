const express = require("express");
const mongoose = require("mongoose");

var app = express();

app.listen(3000, async () => {
  console.log("start listening");
  await connectToDatabase();
  console.log(`Application started on URL 🎉`);
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb://admin:admin@$mongodb:27017/chat-app`);
};
