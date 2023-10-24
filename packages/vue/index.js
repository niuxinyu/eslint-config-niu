const { isPackageExists } = require('local-pkg')

const isTs = isPackageExists('typescript')

// TODO 根据 vue 版本应用不同规则
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
        // prettier 数组括号间距
        'vue/array-bracket-spacing': ['error', 'never'],
        // prettier 箭头函数两边的括号
        'vue/arrow-spacing': ['error', { before: true, after: true }],
        // prettier 均匀的间距
        'vue/block-spacing': ['error', 'always'],
        // prettier 块级大括号间距
        'vue/brace-style': ['error', 'stroustrup'],
        // prettier 尾逗号
        'vue/comma-dangle': ['error', 'always-multiline'],
        // prettier 逗号间距
        'vue/comma-spacing': ['error', { before: false, after: true }],
        // prettier 尾逗号样式 换行时要求逗号在尾部
        'vue/comma-style': ['error', 'last'],
        // prettier 点位置 换行时在属性前
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        // prettier 函数调用间距
        'vue/func-call-spacing': ['off', 'never'],
        // prettier 对象内冒号前后的间距
        'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // prettier 关键字间距
        'vue/keyword-spacing': ['error', { before: true, after: true }],
        'vue/no-constant-condition': 'warn',
        'vue/no-empty-pattern': 'error',
        // prettier 额外的括号
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
        // 为了和 prettier 兼容
        'vue/operator-linebreak': ['error', 'after'],
        'vue/prefer-template': 'error',
        'vue/quote-props': ['error', 'as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
        'vue/template-curly-spacing': 'error',
        // HTML 保留字作为组件名
        'vue/no-reserved-component-names': 'warn',
        // prettier
        // 但是给与长度错误提示
        'vue/max-len': [
          'error',
          {
            code: 80,
            template: 100,
            tabWidth: 2,
            comments: 10,
            ignorePattern: '',
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            // 是否忽略包含单引号或双引号字符串的行
            ignoreStrings: false,
            // 是否忽略模板字符串
            ignoreTemplateLiterals: true,
            // 是否忽略正则行
            ignoreRegExpLiterals: true,
            // 是否忽略 html attributes 的长行
            ignoreHTMLAttributeValues: true,
            // 是否忽略html标签内容
            ignoreHTMLTextContents: true,
          },
        ],
        // off
        // prettier
        // prettier 总是会为 html 标签加上自闭合标签
        // 以 prettier 为准
        'vue/html-self-closing': 'off',
        // prettier https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
        'vue/singleline-html-element-content-newline': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    isTs ? '@koalan/eslint-config-typescript' : '@koalan/eslint-config-base',
  ],
  rules: {
    // prettier vue 文件交由 vue 处理
    'max-len': 'off',
  },
}
