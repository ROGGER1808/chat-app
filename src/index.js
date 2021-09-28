const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const path = require('path');
const morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.listen(3000, async () => {
  console.log("start listening");
  await connectToDatabase();
  console.log(`Application started on URL 🎉`);
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.render('home');
});

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb://admin:admin@$mongodb:27017/chat-app`);
};
