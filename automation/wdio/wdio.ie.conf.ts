import { Config } from "webdriverio";

import baseConfig from "./wdio.base.conf";

const webdriverConfig = {
  drivers: {
    ie: {
      version: "3.150.1",
      arch: "ia32",
      baseURL: "https://selenium-release.storage.googleapis.com",
    },
  },
};

const config: Config = {
  ...baseConfig,

  services: [
    [
      "selenium-standalone",
      {
        args: webdriverConfig,
        installArgs: webdriverConfig,
      },
    ],
  ],

  capabilities: [
    {
      browserName: "internet explorer",
      maxInstances: 2,
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { config };
