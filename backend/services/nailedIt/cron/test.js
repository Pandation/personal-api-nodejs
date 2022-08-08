var os = require("os");
var address = require("address");
var dns = require("node:dns");
var hostname = os.hostname();

const transporter = require("../../../configs/nodemailer").transporter;

const testCron = async () => {
  let addresses;
  try {
    addresses = await new Promise((resolve, reject) => {
      dns.resolve4(String(hostname), (err, addresses) => {
        if (err) {
          resolve(err);
        } else {
          resolve(addresses);
        }
      });
    });
  } catch (error) {
  } finally {
    let object = {
      ip4: address.ip(),
      hostname,
    };
    if (addresses) {
      object.addresses = addresses;
    }
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
  }
};

// testCron();

module.exports = testCron;
