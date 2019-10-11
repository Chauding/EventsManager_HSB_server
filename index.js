const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Connection_String =
  "mongodb+srv://ChauDing:C0c0p0p5%21@fantoosh-r9z4v.mongodb.net/test?retryWrites=true&w=majority";

const bodyParser = require("body-parser");
require("dotenv/config");

// middleware to say parse body into json every time
app.use(bodyParser.json());
// Import routes
const postsRoute = require("./routes/posts");
// middleware to add the first bit to the route
app.use("/posts", postsRoute);

// routes
app.get("/", (req, res) => {
  res.send("HOME");
});

//contect to db
mongoose.connect(Connection_String, { useNewUrlParser: true }, () =>
  console.log("connected!")
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
