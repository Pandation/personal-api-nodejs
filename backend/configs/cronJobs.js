const cron = require("cron");

const nailedItCron = require("../services/nailedIt/cron/index");
const testCron = require("../services/nailedIt/cron/test");

let nailedIt = cron.job("0 30 12 * * *", nailedItCron, null, true);
