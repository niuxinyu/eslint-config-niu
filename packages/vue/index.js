const { isPackageExists } = require('local-pkg');

const isTs = isPackageExists('typescript');

module.exports = {
  extends: [
    '@antfu/eslint-config-vue',
    isTs ? '@koalaniu/eslint-config-typescript' : '@koalaniu/eslint-config-base',
  ],
  rules: {
    // all overrides
    'vue/component-tags-order': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'import/order': [
      'error', {
        // 'groups': ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'object', 'type'],
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
      },
    ],
  },
};
