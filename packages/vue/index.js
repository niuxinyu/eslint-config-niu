const { isPackageExists } = require('local-pkg');

const isTs = isPackageExists('typescript');

module.exports = {
  extends: [
    '@antfu/eslint-config-vue',
    isTs ? '@koalaniu/eslint-config-typescript' : '@koalaniu/eslint-config-base',
  ],
};
