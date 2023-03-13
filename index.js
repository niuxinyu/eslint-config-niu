const { isPackageExists } = require('local-pkg');

const isTS = isPackageExists('typescript');

const sharedRules = {
  'arrow-parens': ['error', 'always'],
  'semi': ['error', 'always'],
  'antfu/if-newline': 'off',
  'curly': ['error', 'all'],
  'import/order': [
    'error', {
      'groups': ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
      'pathGroups': [
        {
          pattern: 'vue',
          group: 'builtin',
          position: 'before',
        },
        {
          pattern: 'vuex',
          group: 'builtin',
          position: 'before',
        },
        {
          pattern: 'vue-router',
          group: 'builtin',
          position: 'before',
        },
        {
          pattern: '@/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: 'coms/**',
          group: 'external',
          position: 'after',
        },
      ],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
        orderImportKind: 'desc',
      },
      'pathGroupsExcludedImportTypes': ['builtin'],
      'warnOnUnassignedImports': false,
    },
  ],
  'prefer-promise-reject-errors': 'off',
  'operator-linebreak': ['error', 'after'],
  'quote-props': 'off',
};

module.exports = {
  extends: ['@antfu/eslint-config'],
  rules: {
    ...sharedRules,
    ...(isTS ?
        {
        // Overrides TS
          '@typescript-eslint/semi': ['error', 'always'],
          '@typescript-eslint/member-delimiter-style': 'off',
          '@typescript-eslint/brace-style': 'off',
          '@typescript-eslint/no-use-before-define': 'off',
        } :
      null),
  },
};
