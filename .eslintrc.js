module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    semi: ["error", "always"],
    "react/prop-types": "off",
  },
};
