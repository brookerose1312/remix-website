/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  // We're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to
  // set the jest version explicitly.
  settings: {
    jest: {
      version: 27,
    },
    "import/resolver": {
      alias: {
        map: [["~/*", "./app/*"], ["public/*", "./public/*"]],
        extensions: ['.js', '.jsx', '.json', '.jpeg', '.png']
      }
    }
  },
  rules: {
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function"
    }],
    "react/react-in-jsx-scope": [0],
    "no-underscore-dangle": [0],
    "import/prefer-default-export": [0],
    "react/prop-types": [0],
  }
};
