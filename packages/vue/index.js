const { isPackageExists } = require('local-pkg')

const isTs = isPackageExists('typescript')

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        ...(isTs ? { parser: '@typescript-eslint/parser' } : null),
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        ...(isTs ? { '@typescript-eslint/no-unused-vars': 'off' } : null),
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    isTs ? '@koalan/eslint-config-typescript' : '@koalan/eslint-config-base',
  ],
  rules: {
    // off
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/no-v-text-v-html-on-component': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

    // 标签顺序
    // 仅作推荐
    // 'vue/component-tags-order': ['error', {
    //   order: ['script', 'template', 'style'],
    // }],
    'vue/component-tags-order': 'off',
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-'],
      },
    ],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',

    // extensions
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    // 'vue/func-call-spacing': ['off', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/object-curly-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': 'error',
    // HTML 保留字作为组件名
    'vue/no-reserved-component-names': 'warn',

    // vue 文件交由 vue 处理
    'max-len': 'off',
    'vue/max-len': [
      'error',
      {
        code: 80,
        template: 80,
        tabWidth: 2,
        comments: 80,
        ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        // 是否忽略包含单引号或双引号字符串的行
        // 某些情况下，比如代码中包括引号等 也会被视为 单引号或双引号行
        ignoreStrings: false,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        // 是否忽略 template 中的 html 属性
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: true,
      },
    ],
  },
}
