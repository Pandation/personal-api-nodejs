const path = require("path");
var os = require("os");
var dns = require("node:dns");
var hostname = os.hostname();

let host = new Promise((resolve, reject) => {
  dns.resolve4("personal-api-nodejs.vercel.app", (err, adresses) => {
    resolve(adresses);
  });
});

const EmailTemplateModel = require("../models/emailTemplate.model");
const transporter = require("../../../configs/nodemailer").transporter;

const SendingConfigModel = require("../models/sendingConfig.model");

const testCron = async () => {
  let adresses = await host;
  if (adresses.indexOf(hostname) !== -1) {
    transporter.sendMail(
      {
        to: "florianbaumes@gmail.com",
        from: "florianbaumes@gmail.com",
        subject: "Nailed It - Logs",
        text: JSON.stringify({hostname, adresses}),
        priority: "high",
      },
      (err, info) => {
        if (err) console.log(err);
        console.log(info);
      }
    );
  }
};

module.exports = testCron;
