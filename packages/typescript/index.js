module.exports = {
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // override
    'curly': ['error', 'all'],
  },
};
