module.exports = {
  extends: ['@koalan/eslint-config-vue'],
  rules: {
    // All Overrides
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    'import/named': 'off',
    // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors#further-reading
    // 禁用 期望 reject 返回 error
    'prefer-promise-reject-errors': 'off',
  },
}
