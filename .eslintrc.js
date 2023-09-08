module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    '@koalan',
  ],
  plugins: [
    'antfu',
  ],
  // 下边的为业务代码中需要覆盖的设置
  rules: {
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off'
  }
}
