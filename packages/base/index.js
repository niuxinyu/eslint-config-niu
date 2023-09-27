// eslint

const likeBuiltInModules = [
  'vue',
  'vue-router',
  'vuex',
  'pinia',
  'react',
  'react-dom',
  'react-router-dom',
  'axios',
]

const builtinRules = () =>
  likeBuiltInModules.map((name) => {
    return {
      pattern: name,
      group: 'builtin',
      position: 'before',
    }
  })

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    // https://github.com/standard/eslint-config-standard
    'standard',
    // https://github.com/import-js/eslint-plugin-import
    'plugin:import/recommended',
  ],
  // 忽略以下文件
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // force include
    // 暂时忽略
    // 需要增加对应的 parser
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  plugins: ['html', 'unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs'],
      },
    },
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        'no-void': ['error', { allowAsStatement: true }],
      },
    },
  ],
  rules: {
    // import
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          ...builtinRules(),
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          // {
          //   pattern: 'coms/**',
          //   group: 'external',
          //   position: 'after',
          // },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
          orderImportKind: 'desc',
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        warnOnUnassignedImports: false,
      },
    ],
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
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
          // 多行规则和单行规则有冲突
          // 'multilin-block-like',
          // 'multiline-const',
          // 'multiline-expression',
          // 'multiline-let',
          // 'multiline-var',
          // 'singleline-const',
          // 'singleline-let',
          // 'singleline-var',
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
    'quote-props': ['error', 'as-needed'],

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'no-param-reassign': 'off',
    // prettier
    'array-bracket-spacing': ['error', 'never'],
    // prettier 大括号样式
    'brace-style': ['error', '1tbs'],
    'block-spacing': ['error', 'always'],
    camelcase: 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-constant-condition': 'warn',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-cond-assign': ['error', 'always'],
    'func-call-spacing': ['off', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    indent: [
      'error',
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-return-await': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    // prettier 箭头函数周围的括号
    'arrow-parens': ['error', 'always'],
    'generator-star-spacing': 'off',
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

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    complexity: ['off', 11],
    eqeqeq: ['error', 'smart'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    // prettier
    'operator-linebreak': ['error', 'after'],
    'max-statements-per-line': ['error', { max: 1 }],

    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],

    // prettier 但是给与长度错误提示
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignorePattern: '',
      },
    ],
  },
}
