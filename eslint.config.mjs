import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    ...globals.browser,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@eslint/recommended",
  ],
  rules: {
    ...fixupConfigRules(pluginReactConfig),
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
