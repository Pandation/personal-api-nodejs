const path = require("path");

const EmailTemplateModel = require("../models/emailTemplate.model");
const transporter = require("../../../configs/nodemailer").transporter;

const SendingConfigModel = require("../models/sendingConfig.model");

const nailedItCron = async () => {
  let today = new Date();
  let sendingConfigs = await SendingConfigModel.find({ enabled: true })
    .populate("company", "name contactGender email -_id")
    .populate("process");

  let mailsInfo = await Promise.all(
    sendingConfigs.map(async (sendingConfig) => {
      // if (sendingConfig.company.email !== "florianbaumes@gmail.com") {
      //   return null;
      // }
      if (
        sendingConfig.nextMailDate &&
        today.toLocaleDateString() !==
          sendingConfig.nextMailDate.toLocaleDateString()
      ) {
        return null;
      }
      let emailTemplate = await EmailTemplateModel.findOne({
        process: sendingConfig.process._id,
        status: sendingConfig.status,
      });
      if (!emailTemplate) {
        return {
          idSendingConfig: sendingConfig._id,
          company: sendingConfig.company.name,
          email: sendingConfig.company.email,
          success: false,
          process: sendingConfig.process.name,
          status: sendingConfig.status,
          message: "no template for this config",
          err: true,
        };
      }

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
            sender: "Florian Baumes",
            ...emailContent,
            attachments: [
              {
                filename: "CV",
                path: path.join(__dirname, "../../../files", "CV.pdf"),
              },
            ],
          },
          (err, info) => {
            resolve({
              idSendingConfig: sendingConfig._id,
              company: sendingConfig.company.name,
              email: sendingConfig.company.email,
              success: info?.message === "success",
              process: sendingConfig.process.name,
              status: sendingConfig.status,
              message: info?.message ?? "",
              err,
            });
          }
        );
      });
    })
  );

  mailsInfo = mailsInfo.filter((info) => info !== null);

  let idsToUpdate = [];

  mailsInfo.forEach((info) => {
    if (info.success === true) {
      idsToUpdate.push(info.idSendingConfig);
    }
  });

  let inTwoWeeks = new Date();
  inTwoWeeks.setDate(inTwoWeeks.getDate() + 14);

  let configsUpdated = await SendingConfigModel.updateMany(
    {
      _id: { $in: idsToUpdate },
    },
    {
      status: "relance",
      lastMailDate: today,
      nextMailDate: inTwoWeeks,
    }
  );

  let logs = mailsInfoToLogs(mailsInfo, configsUpdated);
  transporter.sendMail({
    to: "florianbaumes@gmail.com",
    from: "florianbaumes@gmail.com",
    subject: "Nailed It - Logs",
    html: logs,
    priority: "high",
  });
};

module.exports = nailedItCron;

function mailsInfoToLogs(mailsInfo, docsUpdated) {
  if (mailsInfo.length === 0) {
    return "No datas";
  }

  let styles = {
    table: `'
  border: solid 2px black;
  border-collapse: collapse;
  '`,
    th: `'
  padding: 5px;
  color: white;
  background-color: darkgrey;
  font-size: 16px;
  border: solid 2px black;
  '`,
    td: `'
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  border: solid 2px black;
  border-collapse: collapse;
  '`,
  };
  let html = `
    <h2>Tableau récapitulatif des envois:</h2>
    <table style=${styles.table}>
        <thead>
            <tr>
                <th style=${styles.th}>COMPANY</th>
                <th style=${styles.th}>EMAIL</th>
                <th style=${styles.th}>SUCCESS</th>
                <th style=${styles.th}>PROCESS</th>
                <th style=${styles.th}>STATUS</th>
                <th style=${styles.th}>MESSAGE</th>
                <th style=${styles.th}>ERROR</th>
            </tr>
        </thead>
    <tbody>`;

  mailsInfo.forEach((mailInfo) => {
    html += `
        <tr>
            <td style=${styles.td}>${mailInfo.company}</td>
            <td style=${styles.td}>${mailInfo.email}</td>
            <td style=${styles.td}>${mailInfo.success}</td>
            <td style=${styles.td}>${mailInfo.process}</td>
            <td style=${styles.td}>${mailInfo.status}</td>
            <td style=${styles.td}>${mailInfo.message}</td>
            <td style=${styles.td}>${JSON.stringify(mailInfo.err)}</td>
        </tr>`;
  });

  html += `</tbody>
    </table>`;

  html += `
    <pre style="font-size : 14px;">
    ${JSON.stringify(docsUpdated, null, 2)}
    </pre>
  `;

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
