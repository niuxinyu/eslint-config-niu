module.exports = {
  extends: ['@koalan/eslint-config-vue'],
  rules: {
    // All Overrides
    // 只导入具名的导出
    'import/named': 'off',
    // 期望 reject 返回 error
    'prefer-promise-reject-errors': 'off',
  },
}
