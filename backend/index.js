const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const cors = require("cors");

require("dotenv").config();
require("./configs/db");

const configController = require("./services/config.controller");
const port = process.env.PORT || 3001;

//cron jobs
require("./configs/cronJobs");

//cors
app.use(
  cors({
    origin: ["http://localhost:3000", "https://personal-api-nodejs.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(express.static("/public"));
// app.use(express.static("/files/"));
// app.use(express.static("/client/build/"));

//API
const authRoutes = require("./authentication/routes/auth.route");
app.use("/api/auth", authRoutes);

app.use("/api/config", configController.getSelectsLists);

const portfolioRoutes = require("./services/portfolio/routes/portfolio.route");
app.use("/api/portfolio", portfolioRoutes);

const nailedItRoutes = require("./services/nailedIt/routes/nailedIt.route");
app.use("/api/nailedIt", nailedItRoutes);

//REACT APP ADMIN OFFICE
app.get("/*", (_,res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"))
})
// app.get("/*", (_, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else {
    console.log("Server started on port " + port);
  }
});