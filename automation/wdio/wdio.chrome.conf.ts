import { Config } from "webdriverio";

import baseConfig from "./wdio.base.conf";

const config: Config = {
  ...baseConfig,

  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          "--headless",
          "--no-sandbox",
          "--disable-translate",
          "--disable-extensions",
          "--disable-sync",
          "--disable-default-apps",
          "--no-first-run",
        ],
      },
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { config };
