import { Config } from "webdriverio";

import baseConfig from "./wdio.base.conf";

const config: Config = {
  ...baseConfig,

  capabilities: [
    {
      browserName: "firefox",
      acceptInsecureCerts: true,
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { config };
