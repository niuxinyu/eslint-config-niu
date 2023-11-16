export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]

// ignores: [
//   '*.min.*',
//   '*.d.ts',
//   'CHANGELOG.md',
//   'dist',
//   'LICENSE*',
//   'output',
//   'out',
//   'coverage',
//   'public',
//   'temp',
//   'package-lock.json',
//   'pnpm-lock.yaml',
//   'yarn.lock',
//   '__snapshots__',
//   // ignore for in lint-staged
//   '*.css',
//   '*.png',
//   '*.ico',
//   '*.toml',
//   '*.patch',
//   '*.txt',
//   '*.crt',
//   '*.key',
//   'Dockerfile',
//   // force include
//   // 暂时忽略
//   // 需要增加对应的 parser
//   '!.github',
//   '!.vitepress',
//   '!.vscode',
// ],

export const GLOB_VUE = '**/*.vue'

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'


export const GLOB_JSON = '**/*.json'
export const GLOB_JSON5 = '**/*.json5'
export const GLOB_JSONC = '**/*.jsonc'
