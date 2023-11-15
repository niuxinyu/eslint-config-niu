import * as jsonc from 'eslint-plugin-jsonc'
import * as parserJsonc from 'jsonc-eslint-parser'

/**
 * @param {import('./index.d.ts').ConfigItemOptions} options
 * @returns {import('./types.js').ConfigItem[]}
 *  */
export const jsoncConfig = (options) => {
  const { overrides = {} } = options
  return [
    {
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
      plugins: {
        jsonc,
      },
      languageOptions: {
        parser: parserJsonc,
      },
      rules: {
        // 禁止 bigint
        'jsonc/no-bigint-literals': 'error',
        // 禁止表达式属性
        'jsonc/no-binary-expression': 'error',
        // 禁止二进制数字作为属性
        'jsonc/no-binary-numeric-literals': 'error',
        // 禁止重复的 key
        'jsonc/no-dupe-keys': 'error',
        // 禁止悬浮的小数
        'jsonc/no-floating-decimal': 'error',
        // 禁止数字key
        'jsonc/no-number-props': 'error',
        // 禁止数字分隔符
        'jsonc/no-numeric-separators': 'error',
        // 禁止属性括号
        'jsonc/no-parenthesized': 'error',
        // 禁止属性加号
        'jsonc/no-plus-sign': 'error',
        // 禁止正则表达式属性
        'jsonc/no-regexp-literals': 'error',
        // 禁止模板字符串属性
        'jsonc/no-template-literals': 'error',
        // 禁止 undefined 作为属性
        'jsonc/no-undefined-value': 'error',
        ...overrides,
      },
    },
  ]
}
