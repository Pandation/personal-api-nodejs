const path = require("path");

const EmailTemplateModel = require("../models/emailTemplate.model");
const transporter = require("../../../configs/nodemailer").transporter;

const SendingConfigModel = require("../models/sendingConfig.model");

const testCron = async () => {
  transporter.sendMail({
    to: "florianbaumes@gmail.com",
    from: "florianbaumes@gmail.com",
    subject: "Nailed It - Logs",
    text: "coucou cest moi",
    priority: "high",
  }, (err,info) => {
    if(err) console.log(err)
    console.log(info)
  });
};

module.exports = testCron;