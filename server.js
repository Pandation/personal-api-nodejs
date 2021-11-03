const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./db");

const authRoutes = require("./authentication/routes/auth.route");
const portfolioRoutes = require("./portfolio/routes/portfolio.route");
const apiRoutes = require("./routes");
const port = 5000;

// //cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(express.static("./client/build/"));

//REACT APP ADMIN OFFICE
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/client/build/index.html");
});

//API
app.use("/api/*", apiRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else console.log("Server started on port " + port);
});
