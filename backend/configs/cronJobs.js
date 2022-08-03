const cron = require("cron");

let nailedIt = cron.job(
  "0 */5 * * * *",
  function () {
    console.log("You will see this message every day at 07.OO am");
  },
  //onComplete, bilan des envois et relances?
  null,
  false
);
