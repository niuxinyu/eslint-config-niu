import { isPackageExists } from 'local-pkg'

import { baseConfig } from './base.js'
import { ignoresConfig } from './ignores.js'
import { importsConfig } from './imports.js'
import { jsoncConfig } from './jsonc.js'
import { markdownConfig } from './markdown.js'
import { typescriptConfig } from './typescript.js'
import { vueConfig } from './vue.js'

const vuePackages = ['vue', 'nuxt', 'vitepress', '@slidev/cli']

/**
 * @param {import('./types.d.ts').Options | undefined} options
 */
const koalan = (options = {}) => {
  const {
    isTs = isPackageExists('typescript'),
    isVue = vuePackages.some((pkg) => isPackageExists(pkg)),
    ignores = [],
  } = options

  const defaultIgnores = ignoresConfig()
  const ignoresRes = [...defaultIgnores, ...ignores]

  const configs = [
    ...ignoresRes,
    ...jsoncConfig({
      overrides: options.overrides?.jsonc,
    }),
    ...baseConfig({
      overrides: options.overrides?.javascript,
    }),
    ...importsConfig({
      overrides: options.overrides?.imports,
    }),
  ]

  if (isTs) {
    configs.push(
      ...typescriptConfig({
        overrides: options.overrides?.typescript,
      }),
    )
  }

  if (isVue) {
    configs.push(
      ...vueConfig({
        isTs,
        overrides: options.overrides?.vue,
      }),
    )
  }

  configs.push(
    ...markdownConfig({
      overrides: options.overrides?.markdown,
    }),
  )

  return configs
}

export default koalan
