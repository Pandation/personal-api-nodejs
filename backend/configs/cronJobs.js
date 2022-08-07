const cron = require("cron");

const nailedItCrons = require("../services/nailedIt/cron/index");

let nailedIt = cron.job("0 0 10 * * *", nailedItCrons, null, true);
