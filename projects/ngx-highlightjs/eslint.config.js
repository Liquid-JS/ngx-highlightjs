// @ts-check
const tseslint = require("typescript-eslint");
const rootConfig = require("../../eslint.config.js");

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/component-class-suffix": 0,
      "@angular-eslint/directive-class-suffix": 0,
      "@angular-eslint/no-input-rename": 0,
      "@angular-eslint/no-output-rename": 0,
      "@angular-eslint/no-output-native": 0,
      "@angular-eslint/no-host-metadata-property": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "no-prototype-builtins": 0
    },
  },
  {
    files: ["**/*.html"],
    rules: {
      "@angular-eslint/template/elements-content": 0
    },
  }
);
