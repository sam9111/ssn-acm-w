module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  rules: {
    semi: ["error", "always"],
  },
};
