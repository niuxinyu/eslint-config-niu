module.exports = {
  extends: ['@koalan/eslint-config-vue'],
  rules: {
    // All Overrides
    // 只导入具名的导出
    'import/named': 'off',
    // 期望 reject 返回 error
    'prefer-promise-reject-errors': 'off',
    // 关于换行运算符的放置位置
    // https://eslint.org/docs/latest/rules/operator-linebreak#rule-details
    // prettier 的 issue
    // https://github.com/prettier/prettier/issues/3806
    'operator-linebreak': 'off',
  },
}
