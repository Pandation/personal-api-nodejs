const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require('cors');
require("dotenv").config();
require("./db");

const authRoutes = require("./authentication/routes/auth.route");
const portfolioRoutes = require("./portfolio/routes/portfolio.route");
const port = 5000;

// //cors
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes );


app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else console.log("Server started on port " + port);
});

