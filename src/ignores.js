import { GLOB_EXCLUDE } from './glob.js'

/** @returns {import('./types.d.ts').ConfigItem[]} */
export const ignoresConfig = () => {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
