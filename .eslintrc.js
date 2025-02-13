module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
    'jest/globals': true,
  },
  plugins: ['react', 'react-native', 'jest'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
};
