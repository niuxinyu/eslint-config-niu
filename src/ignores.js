import { GLOB_EXCLUDE } from './glob.js'

/** @returns {import('./types.js').ConfigItem[]} */
export const ignoresConfig = () => {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
