const path = require("path");
var os = require("os");
var address = require("address");
var dns = require("node:dns");
var hostname = os.hostname();

const EmailTemplateModel = require("../models/emailTemplate.model");
const transporter = require("../../../configs/nodemailer").transporter;

const SendingConfigModel = require("../models/sendingConfig.model");

const testCron = async () => {
  let adresses = await new Promise((resolve, reject) => {
    dns.resolve(String(hostname), (err, adresses) => {
      resolve(adresses);
    });
  });
  let object = {
    adresses,
    ip4: address.ip(),
    hostname,
  };
  transporter.sendMail(
    {
      to: "florianbaumes@gmail.com",
      from: "florianbaumes@gmail.com",
      subject: "Nailed It - Logs",
      text: JSON.stringify(object, null, 2),
      html: JSON.stringify(object, null, 2),
      priority: "high",
    },
    (err, info) => {
      if (err) console.log(err);
      console.log(info);
    }
  );
};

// testCron()

module.exports = testCron;
