module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['@koalan'],
  // 个人启用 但是 业务代码中禁用
  // 下边的为业务代码中需要覆盖的设置
  rules: {
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'vue/component-name-in-template-casing': 'off',
    // 禁用 any 类型的调用报错
    '@typescript-eslint/no-unsafe-call': 'off',
    // 禁用 vue 模板内只有中文要求换行
    'vue/singleline-html-element-content-newline': 'off',
  },
}
