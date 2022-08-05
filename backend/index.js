const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const cors = require("cors");

require("dotenv").config();
require("./configs/db");

const port = 5000;

//cron
require("./configs/cronJobs");

//nodemailer
const transporter = require("./configs/nodemailer").transporter;

//cors
app.use(
  cors({
    origin: ["http://localhost:3000", "https://personal-api-nodejs.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(express.static("/public/uploads/"));
app.use(express.static("/files/"));

//API
const authRoutes = require("./authentication/routes/auth.route");
app.use("/api/auth", authRoutes);

const portfolioRoutes = require("./services/portfolio/routes/portfolio.route");
app.use("/api/portfolio", portfolioRoutes);

const nailedItRoutes = require("./services/nailedIt/routes/nailedIt.route");
app.use("/api/nailedIt", nailedItRoutes);

//REACT APP ADMIN OFFICE
app.use(express.static(path.join(__dirname, "../frontend", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

app.listen(port, (err, doc) => {
  if (err) console.log(err);
  else console.log("Server started on port " + port);
});

//DEV
// app.get("/test", (req, res) => {
//   transporter.sendMail(
//     {
//       to: "mat.grimal@gmail.com",
//       from: "florianbaumes@gmail.com",
//       text: `
//       Monsieur, Madame,

//       Je vous écris cette lettre afin de postuler à l'annonce 20394 sur pôle emploi. En effet cela m'aiderait à nourrir les miens.
//       En vous remerciant par avance, je vous prie d'agréer mes plus sincères salutations.

//       Cordialement,
//       Florian Baumes
//       `,
//       html: `
//       <p>Monsieur, Madame,</p>
//       <br/>
//       <p>Je vous écris cette lettre afin de postuler à l'annonce 20394 sur pôle emploi. En effet cela m'aiderait à nourrir les miens.</p>
//       <p>En vous remerciant par avance, je vous prie d'agréer mes plus sincères salutations.</p>
//       <br />
//       <p>Cordialement,</p>
//       <p>Florian Baumes</p>
//       `,
//       subject: "Candidature spontanée",
//       priority: "high",
//       attachments: [
//         {
//           filename: "CV",
//           path: path.join(__dirname, "./files", "CV.pdf"),
//         },
//       ],
//     },
//     (err, info) => {
//       if (err) return console.log(err);
//       console.log("mail envoyé si tout va bien :)");
//     }
//   );
// });
