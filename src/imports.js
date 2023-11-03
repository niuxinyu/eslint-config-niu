import * as importsPlugin from 'eslint-plugin-import'

export const importsConfig = () => {
  return [
    {
      plugins: {
        // https://github.com/import-js/eslint-plugin-import
        import: importsPlugin,
      },
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
      },
    },
  ]
}
