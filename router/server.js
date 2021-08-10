const express = require("express");
const app = express();
const path = require("path");
// const Ejs = require("express-ejs");
const ejs = require("ejs");

const PORT = process.env.PORT || 80;

// defining path:
app.set("/views", path.join(__dirname, "veiws")); // connect with file
app.use(express.static("static"));
// set engine:
app.set("view engine", "ejs");
// express specific stuff:

app.use("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (req, res) => {
  console.log("port is running on " + PORT);
});
