module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  rules: {
    "linebreak-style": "off", // Don't play nicely with Windows.
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off", // Don't play nicely with tsconfig paths re-maps.
    "import/no-cycle": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/ban-ts-ignore": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "no-underscore-dangle": 1
  }
};
