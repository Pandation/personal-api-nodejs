const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const authRoutes = require("./routes/auth.route");
const port = 5000;

//cors
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
//routes
app.use("/api/auth", authRoutes);

app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else console.log("Server started on port " + port);
});
