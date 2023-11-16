import { existsSync } from 'node:fs'
import { join } from 'node:path'

import * as tsRules from '@typescript-eslint/eslint-plugin'
import * as parser from '@typescript-eslint/parser'

import { GLOB_TS, GLOB_TSX } from './glob.js'

let tsconfig = 'tsconfig.eslint.json'

const isFileExit = existsSync(join(process.cwd(), tsconfig))

if (!isFileExit) {
  globalThis.console.log(
    'No tsconfig.eslint.json file found, use tsconfig.json instead.',
  )
  tsconfig = 'tsconfig.json'
}

/**
 * @param {import('./types.d.ts').ConfigItemOptions} options
 * @returns {import('./types.d.ts').ConfigItem[]}
 *  */
export const typescriptConfig = (options) => {
  const { overrides = {} } = options
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        // tsconfigRootDir: process.cwd(),
        // project: [tsconfig],
        parser,
      },
      plugins: {
        // ts: tsRules.default.configs.recommended,
        ts: tsRules.default,
      },
      settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
        },
      },
      rules: {
        // 禁止 ts 类似错误的忽略注释
        // 例如 @ts-ignore
        // 允许带有描述的 @ts-ignore
        'ts/ban-ts-comment': [
          'error',
          { 'ts-ignore': 'allow-with-description' },
        ],
        // 接口和类型别名中的分隔符样式
        // 多行 不添加分号
        // 单行添加分号
        'ts/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: true,
            },
          },
        ],

        'ts/type-annotation-spacing': ['error', {}],
        'ts/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', disallowTypeAnnotations: false },
        ],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/prefer-ts-expect-error': 'error',

        // Override JS
        'no-useless-constructor': 'off',
        // prettier 缩进
        indent: 'off',
        'ts/indent': 'off',
        'no-redeclare': 'off',
        'ts/no-redeclare': 'error',
        'no-use-before-define': 'off',
        'ts/no-use-before-define': 'off',
        // prettier
        'brace-style': 'off',
        // prettier 块级代码样式
        'ts/brace-style': ['error', '1tbs'],
        // prettier
        'comma-dangle': 'off',
        // prettier 尾逗号
        'ts/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            // ts only
            // 箭头函数的泛型需要始终加分号，否则解析会失败
            generics: 'always-multiline',
            // 其他的仅 需要多行时即可
            enums: 'always-multiline',
            tuples: 'always-multiline',
          },
        ],
        'object-curly-spacing': 'off',
        'ts/object-curly-spacing': ['error', 'always'],
        // js
        semi: ['error', 'never'],
        // ts
        'ts/semi': ['error', 'never'],
        // 交由 typescript 处理
        quotes: 'off',
        'ts/quotes': ['error', 'single'],
        // prettier 块级前的空格
        'space-before-blocks': 'off',
        'ts/space-before-blocks': ['error', 'always'],
        'space-before-function-paren': 'off',
        'ts/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'space-infix-ops': 'off',
        'ts/space-infix-ops': 'error',
        // prettier 关键字间距
        'keyword-spacing': 'off',
        // prettier 关键字间距
        'ts/keyword-spacing': ['error', { before: true, after: true }],
        // prettier
        'comma-spacing': 'off',
        // prettier 逗号间距
        'ts/comma-spacing': ['error', { before: false, after: true }],
        // prettier 额外的括号
        'no-extra-parens': 'off',
        // prettier 额外的括号
        'ts/no-extra-parens': ['error', 'functions'],
        'no-dupe-class-members': 'off',
        'ts/no-dupe-class-members': 'error',
        'no-loss-of-precision': 'off',
        'ts/no-loss-of-precision': 'error',
        'lines-between-class-members': 'off',
        'ts/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],

        // off
        'ts/consistent-indexed-object-style': 'off',
        'ts/naming-convention': 'off',
        'ts/explicit-function-return-type': 'off',
        'ts/explicit-member-accessibility': 'off',
        'ts/no-explicit-any': 'off',
        'ts/parameter-properties': 'off',
        'ts/no-empty-interface': 'off',
        'ts/ban-ts-ignore': 'off',
        'ts/no-empty-function': 'off',
        'ts/no-non-null-assertion': 'off',
        'ts/explicit-module-boundary-types': 'off',
        'ts/ban-types': 'off',
        'ts/no-namespace': 'off',
        'ts/triple-slash-reference': 'off',
        // handled by unused-imports/no-unused-imports
        'ts/no-unused-vars': 'off',
        'ts/no-extra-semi': 'off',
        // 不关注导入语句
        'ts/no-var-requires': 'off',

        ...overrides,
      },
    },
  ]
}
