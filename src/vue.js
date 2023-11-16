import * as tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import * as parser from 'vue-eslint-parser'

import { GLOB_VUE } from './glob.js'

/**
 * @param {import('./types.d.ts').ConfigItemOptions & { isTs: boolean }} options
 * @returns {import('./types.d.ts').ConfigItem[]}
 *  */
export const vueConfig = (options) => {
  const { isTs, overrides = {} } = options

  return [
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: isTs ? tsParser : null,
        },
      },
      plugins: {
        vue: vuePlugin,
      },
      rules: {
        // off
        // 没行的最大属性
        // 会和 prettier 的换行冲突
        'vue/max-attributes-per-line': 'off',
        // 禁止 v-html
        'vue/no-v-html': 'off',
        // 强制 props 定义类型
        'vue/require-prop-types': 'off',
        // 要求 props 都有默认值
        'vue/require-default-prop': 'off',
        // 要求组件名称始终为多字
        'vue/multi-word-component-names': 'off',
        // 导入vue时 不允许使用 '@vue/xxx' 的形式
        'vue/prefer-import-from-vue': 'off',
        'vue/no-v-text-v-html-on-component': 'off',

        // 不允许结构 props
        'vue/no-setup-props-destructure': 'off',

        // 标签顺序
        // 仅作推荐
        'vue/component-tags-order': ['warning', {
          order: ['script', 'template', 'style'],
        }],
        
        // 在闭合标签之间要求空行
        'vue/block-tag-newline': [
          'error',
          {
            singleline: 'always',
            multiline: 'always',
          },
        ],
        // 要求注册的组件在使用时名称为 PascalCase 格式
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        // 要求组件注册时的名称为 PascalCase 格式
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        // 要求注册事件名称为小驼峰
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        // 宏顺序
        'vue/define-macros-order': [
          'error',
          {
            order: ['defineProps', 'defineEmits'],
          },
        ],
        // 强制注释之后有间距
        'vue/html-comment-content-spacing': [
          'error',
          'always',
          {
            exceptions: ['-'],
          },
        ],
        // 防止指令使用错误 例如 :v-model
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        // v-bind 的字符串值要求
        'vue/no-useless-v-bind': 'error',
        // 单文件不同模块之间要求空行
        'vue/padding-line-between-blocks': ['error', 'always'],
        // 对于静态类 单独使用 class 进行设置
        'vue/prefer-separate-static-class': 'error',

        // 拓展自基础规则
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
        // 禁止在 template 上使用恒定的条件
        // 例如 <template v-if="false">
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
        // HTML 保留字作为组件名 给与警告
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
        'vue/singleline-html-element-content-newline': 'off',

        // 禁用 max-len
        'max-len': 'off',

        ...overrides,
      },
    },
  ]
}
