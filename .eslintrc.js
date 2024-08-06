module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // Diğer özel kurallarınızı buraya ekleyin
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
