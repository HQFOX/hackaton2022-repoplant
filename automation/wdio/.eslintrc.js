module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "linebreak-style": "off", // Don't play nicely with Windows.
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/ban-ts-ignore": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "no-underscore-dangle": 1,
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": "off"
  },
};
