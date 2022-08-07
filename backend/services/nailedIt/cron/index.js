const cron = require("cron");
const { resolve } = require("path");
const path = require("path");

const EmailTemplateModel = require("../models/emailTemplate.model");
const transporter = require("../../../configs/nodemailer").transporter;

const SendingConfigModel = require("../models/sendingConfig.model");

let nailedIt = cron.job(
  "0 0 8 * * *",
  async function () {
    let sendingsConfigs = await SendingConfigModel.find({ enabled: true })
      .populate("company", "name contactGender email -_id")
      .populate("process");

    let mailsInfo = await Promise.all(
      sendingsConfigs.map(async (sendingConfig) => {
        // if (sendingConfig.company.email !== "florianbaumes@gmail.com") {
        //   return null;
        // }
        let emailTemplate = await EmailTemplateModel.findOne({
          process: sendingConfig.process._id,
          status: sendingConfig.status,
        });

        let content = {
          header: emailTemplate.header,
          footer: emailTemplate.footer,
          content: emailTemplate.content,
          customText: sendingConfig.customText,
          gender: sendingConfig.company.contactGender,
          company: sendingConfig.company.name,
          firstname: sendingConfig.company.contactFirstname,
          lastname: sendingConfig.company.contactLastname,
        };
        let emailContent = formatterEmailContent(content);

        return new Promise(function (resolve, reject) {
          transporter.sendMail(
            {
              to: sendingConfig.company.email,
              from: "florianbaumes@gmail.com",
              subject: emailTemplate.subject,
              priority: "high",
              ...emailContent,
              attachments: [
                {
                  filename: "CV",
                  path: path.join(__dirname, "../../../files", "CV.pdf"),
                },
              ],
            },
            (err, info) => {
              if (!err) {
                resolve({
                  company: sendingConfig.company.name,
                  email: sendingConfig.company.email,
                  success: info?.message === "success",
                  process: sendingConfig.process.name,
                  status: sendingConfig.status,
                  message: info?.message ?? "",
                  err,
                });
              }
            }
          );
        });
      })
    );

    mailsInfo = mailsInfo.filter((info) => info !== null);

    let logs = mailsInfoToLogs(mailsInfo);
    transporter.sendMail({
      to: "florianbaumes@gmail.com",
      from: "florianbaumes@gmail.com",
      subject: "Nailed It - Logs",
      html: logs,
      priority: "high",
    });
  },
  null,
  true
);

function mailsInfoToLogs(mailsInfo) {
  if (mailsInfo.length === 0) {
    return "No datas";
  }

  let border = "'border : solid 1px black; border-collapse: collapse;'";
  let padding = "'padding: 3px'";
  let style = {
    th: "'background-color : darkgrey; color: white;'" + border + padding,
    td: border + padding,
  };
  let html = `
    <table style=${border}>
        <thead>
            <tr>
                <th style=${style.th}>COMPANY</th>
                <th style=${style.th}>EMAIL</th>
                <th style=${style.th}>SUCCESS</th>
                <th style=${style.th}>PROCESS</th>
                <th style=${style.th}>STATUS</th>
                <th style=${style.th}>MESSAGE</th>
                <th style=${style.th}>ERROR</th>
            </tr>
        </thead>
    <tbody>`;

  mailsInfo.forEach((mailInfo) => {
    html += `
        <tr>
            <td style=${style.td}>${mailInfo.company}</td>
            <td style=${style.td}>${mailInfo.email}</td>
            <td style=${style.td}>${mailInfo.success}</td>
            <td style=${style.td}>${mailInfo.process}</td>
            <td style=${style.td}>${mailInfo.status}</td>
            <td style=${style.td}>${mailInfo.message}</td>
            <td style=${style.td}>${JSON.stringify(mailInfo.err)}</td>
        </tr>`;
  });

  html += `</tbody>
    </table>`;

  return html;
}

function formatterEmailContent(content) {
  let emailContent = {
    text: "",
    html: "",
  };

  const genderDescriptions = ["Madame, Monsieur, ", "Monsieur, ", "Madame, "];
  let genderDescription = genderDescriptions[parseInt(content.gender)];

  //Ajout Madame, Monsieur
  emailContent = textToEmailContent(genderDescription, emailContent);

  //Ajout Intro
  emailContent = textToEmailContent(content.header, emailContent);

  //Ajout Paragraphe principal
  emailContent = textToEmailContent(content.content, emailContent);

  //ajout texte custom si existant
  if (content.customText) {
    emailContent = textToEmailContent(content.customText, emailContent);
  }

  //ajout salutations
  emailContent = textToEmailContent(content.footer, emailContent);

  //signature
  emailContent = textToEmailContent("Cordialement,", emailContent);
  emailContent = textToEmailContent("Florian Baumes", emailContent);

  return emailContent;
}

function textToEmailContent(text, content) {
  let textNewLines = "\n\n";
  return {
    text: content.text + text + textNewLines,
    html: content.html + `<p>${text}</p>`,
  };
}

module.exports = nailedIt;
