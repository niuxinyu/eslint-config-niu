import * as standard from 'eslint-config-standard'
import * as unusedImports from 'eslint-plugin-unused-imports'

/**
 * @param {import('./index.d.ts').ConfigItemOptions} options
 * @returns {import('./index.d.ts').ConfigItem[]}
 *  */
export const baseConfig = (options) => {
  const { overrides = {} } = options
  return [
    {
      languageOptions: {
        globals: {
          es6: true,
          browser: true,
        },
      },
      plugins: {
        // https://github.com/standard/eslint-config-standard
        standard,
        'unused-imports': unusedImports,
      },
      // ignores: [
      //   '*.min.*',
      //   '*.d.ts',
      //   'CHANGELOG.md',
      //   'dist',
      //   'LICENSE*',
      //   'output',
      //   'out',
      //   'coverage',
      //   'public',
      //   'temp',
      //   'package-lock.json',
      //   'pnpm-lock.yaml',
      //   'yarn.lock',
      //   '__snapshots__',
      //   // ignore for in lint-staged
      //   '*.css',
      //   '*.png',
      //   '*.ico',
      //   '*.toml',
      //   '*.patch',
      //   '*.txt',
      //   '*.crt',
      //   '*.key',
      //   'Dockerfile',
      //   // force include
      //   // 暂时忽略
      //   // 需要增加对应的 parser
      //   '!.github',
      //   '!.vitepress',
      //   '!.vscode',
      // ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.mjs'],
          },
        },
      },
      rules: {
        // 未使用的 import
        'unused-imports/no-unused-imports': 'error',
        // 要求不同语句之间的空行
        // 要求 import 和正式代码之间至少有一个空行
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: 'import',
            next: [
              'block',
              'block-like',
              'break',
              'cjs-export',
              'cjs-import',
              'class',
              'const',
              'debugger',
              'directive',
              'do',
              'export',
              'expression',
              'for',
              'function',
              'if',
              'iife',
              'let',
              'return',
              'switch',
              'throw',
              'try',
              'var',
              'while',
              'with',
            ],
          },
        ],

        // common
        // prettier
        semi: ['error', 'never'],
        // prettier
        curly: ['error', 'all'],
        // prettier
        quotes: ['error', 'single'],
        // prettier
        'quote-props': 'off',
        // 'quote-props': ['error', 'as-needed'],

        // 禁止重新分配函数参数
        // 有些时候这是比较方便快捷的做法
        'no-param-reassign': 'off',
        // prettier 数组括号间距
        'array-bracket-spacing': ['error', 'never'],
        // prettier 大括号样式
        'brace-style': ['error', '1tbs'],
        // prettier 块级代码间距
        'block-spacing': ['error', 'always'],
        // 驼峰命名
        camelcase: 'off',
        // prettier 逗号间距
        'comma-spacing': ['error', { before: false, after: true }],
        // prettier 尾逗号样式 换行时在尾部
        'comma-style': ['error', 'last'],
        // prettier
        // 多行尾逗号
        'comma-dangle': 'off',
        // 'comma-dangle': ['error', 'always-multiline'],
        // 不允许非恒定的比较条件
        // 例如使用常量作为判断条件
        'no-constant-condition': 'warn',
        // debugger
        'no-debugger': 'error',
        // console
        'no-console': ['error', { allow: ['warn', 'error'] }],
        // 在条件运算符中使用赋值语句
        // 'no-cond-assign': ['error', 'always'],
        'no-cond-assign': 'off',
        // prettier 函数调用间距
        'func-call-spacing': ['off', 'never'],
        // prettier 对象内冒号前后的间距
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // prettier 缩进 会和 prettier 冲突
        // indent: ['error', 2],
        indent: 'off',
        // 禁止某些语法写法
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement', // debugger
          'LabeledStatement', // label
          'WithStatement', // with
        ],
        // 强制对象文字、解构赋值和导入/导出说明符的大括号内的间距保持一致。
        'object-curly-spacing': ['error', 'always'],
        // 异步函数返回 await 调用
        'no-return-await': 'off',
        // 函数 () 之前的空格
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],

        // es6
        // var
        'no-var': 'error',
        // 优先使用常量
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
        // 优先使用箭头函数
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        // 优先使用对象简写形式
        'object-shorthand': [
          'error',
          'always',
          {
            ignoreConstructors: false,
            avoidQuotes: true,
          },
        ],
        // 优先使用取幂运算符 ** 而不是 Math.pow
        'prefer-exponentiation-operator': 'error',
        // 优先使用剩余参数 而不是 arguments
        'prefer-rest-params': 'error',
        // 优先使用扩展运算符 而不是 apply
        'prefer-spread': 'error',
        // 优先使用模板字符串
        'prefer-template': 'error',
        // 模板字符串大括号周围空格 默认值 never 即不允许空格
        'template-curly-spacing': 'error',
        // prettier 箭头函数周围的括号
        'arrow-parens': ['error', 'always'],
        // prettier 生成器星号周围的间距
        'generator-star-spacing': 'off',
        // 注释时间的空格
        'spaced-comment': [
          'error',
          'always',
          {
            line: {
              markers: ['/'],
              exceptions: ['/', '#'],
            },
            block: {
              markers: ['!'],
              exceptions: ['*'],
              balanced: true,
            },
          },
        ],

        // 最佳实践
        // 检查需要返回的数组方法中的return语句
        'array-callback-return': 'error',
        // 强制在定义作用域范围内使用变量
        'block-scoped-var': 'error',
        // 要求函数内始终返回统一类型的值
        'consistent-return': 'off',
        // 代码嵌套的最深层级
        complexity: ['off', 11],
        // 使用全等
        eqeqeq: ['error', 'smart'],
        'no-alert': 'warn',
        // 禁止在 case 子句中使用词法声明
        'no-case-declarations': 'error',
        // prettier 多余的空格
        'no-multi-spaces': 'error',
        // 多行字符串
        'no-multi-str': 'error',
        // with 语句
        'no-with': 'error',
        // void 使用
        'no-void': 'off',
        // 不必要的转义字符
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        // 异步函数必须有 await
        'require-await': 'off',
        // 返回语句中使用赋值运算符
        // 例如 return a = b + 1
        'no-return-assign': 'off',
        // prettier
        'operator-linebreak': ['error', 'after'],
        // prettier 每行最大语句数
        'max-statements-per-line': ['error', { max: 1 }],
        // 定义前就使用变量、函数、类等的声明
        'no-use-before-define': [
          'error',
          { functions: false, classes: false, variables: true },
        ],

        // prettier 但是给与长度错误提示
        'max-len': [
          'error',
          {
            code: 80,
            tabWidth: 2,
            ignorePattern: '',
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
          },
        ],

        // prettier
        // 多余分号
        'no-extra-semi': 'off',
        // 未使用的变量给与警告
        'no-unused-vars': 'warn',

        ...overrides,
      },
    },
  ]
}
