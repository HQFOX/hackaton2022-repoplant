require("ts-node").register({ transpileOnly: true });

const browser = process.env.BROWSER || "chrome";

// eslint-disable-next-line import/no-dynamic-require
module.exports = require(`./wdio.${browser}.conf.ts`);
