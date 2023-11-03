import { isPackageExists } from 'local-pkg'

import { baseConfig } from './base.js'
import { importsConfig } from './imports.js'
import { typescriptConfig } from './typescript.js'

const isTs = isPackageExists('typescript')
// const is

const koalan = () => {
  const res = [
    ...baseConfig(),
    ...importsConfig(),
    ...typescriptConfig(),
    // ...vueConfig({
    //   enableTypeScript: isTs,
    // }),
  ]

  console.log(res)

  return res
}

export default koalan
