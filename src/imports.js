import * as importsPlugin from 'eslint-plugin-import'

/**
 * @param {import('./types.d.ts').ConfigItemOptions} options
 *  @returns {import('./types.d.ts').ConfigItem[]}
 *  */
export const importsConfig = (options) => {
  const { overrides = {} } = options
  return [
    {
      plugins: {
        // https://github.com/import-js/eslint-plugin-import
        import: importsPlugin,
      },
      // TODO 和 prettier 的 import sort 插件冲突
      // 考虑移除或者修改 prettier 的 import sort 插件
      rules: {
        // import order
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              ['internal', 'sibling', 'parent', 'index'],
              'unknown',
            ],
            pathGroups: [
              {
                pattern: 'vue',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'src/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/**',
                group: 'parent',
                position: 'before',
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
            distinctGroup: true,
          },
        ],
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        ...overrides,
      },
    },
  ]
}
