module.exports = {
  extends: [
    "react-app",
    // use prettier recommended
    "plugin:prettier/recommended",
    // disable typescript formatting stuff
    "prettier/@typescript-eslint",
  ],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "prefer-arrow-callback": "error",
    "arrow-body-style": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
  },
};
