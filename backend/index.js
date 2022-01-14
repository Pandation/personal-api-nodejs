const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();
require("./db");

const authRoutes = require("./authentication/routes/auth.route");
const portfolioRoutes = require("./portfolio/routes/portfolio.route");
const port = 5000;

// //cors
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
+app.use(express.json());
app.use(cookieParser());

// app.use(express.static("/public/uploads/"));


//API
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

//REACT APP ADMIN OFFICE
app.use(express.static(path.join(__dirname, "../frontend", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});


app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else console.log("Server started on port " + port);
});
