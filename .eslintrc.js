module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
    "max-len": ["warn", {
      "ignoreComments": true,
      "ignoreStrings": true,
      "tabWidth": 2,
      "code": 100
    }],
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off"
  }
}
