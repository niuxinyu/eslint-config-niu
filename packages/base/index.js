module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'standard',
    'plugin:import/recommended',
  ],
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
    // 分号 不需要尾随分号
    semi: ['error', 'never'],
    // 和 prettier 冲突
    // 修改为全部状态下都需要 花括号
    // https://eslint.org/docs/latest/rules/curly#rule-details
    // curly: ['error', 'multi-or-nest', 'consistent'],
    curly: ['error', 'all'],
    // 引号 始终是单引号
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
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
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
    'operator-linebreak': ['error', 'before'],
    'max-statements-per-line': ['error', { max: 1 }],

    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],

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
