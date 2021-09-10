const express = require("express");
const { verify } = require("jsonwebtoken");
const app = express();
require("dotenv").config();
require("./db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.route");
const portfolioRoutes = require("./routes/portfolio.route");
const port = 5000;

//cors
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods","*");
  next();
});

app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes );


// app.get("/test", (req, res) => {
//   console.log(req.cookies.testcook);
//   res
//     .cookie('name', 'tobi', {sameSite :"none", secure : true, httpOnly : false, maxAge : 3600, domain : "localhost"})
//     .json("Et voila un cook!");
// });

app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else console.log("Server started on port " + port);
});


function verifyJWT(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];

  if (token) {
    const decodedToken = verify(decodedToken, process.env.JWT_SECRET);
    console.log(decodedToken);
    res.json("Y a un token valide!");
  } else {
    res.redirect("http://localhost:3000/login?error=notkn");
  }
}
