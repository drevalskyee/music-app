module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'no-unused-expressions': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-return-assign': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
  },
};
