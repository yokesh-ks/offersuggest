module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'prettier'],
  globals: {
    window: true,
    localStorage: true,
    navigator: true,
    location: true,
    branch: true,
    toast: true,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },

  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-inline-styles': 'off',
    'global-require': 'off',
    'no-console': 'off',
    'no-param-reassign': [2, { props: false }],
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'consistent-return': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
}
