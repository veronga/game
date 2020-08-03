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
  },
  plugins: ['react', 'react-native'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
 
};
