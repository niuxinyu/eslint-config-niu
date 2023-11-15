import markdown from 'eslint-plugin-markdown'

/**
 * @param {import('./index.d.ts').ConfigItemOptions} options
 * @return {import('./index.d.ts').ConfigItem[]}
 */
export const markdownConfig = (options) => {
  const { overrides = {} } = options
  return [
    {
      files: ['**/*.md'],
      plugins: {
        markdown,
      },
      processor: 'markdown/markdown',
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      rules: {
        // TODO
        ...overrides,
      },
    },
  ]
}
