export interface ConfigItem {
  languageOptions?: Record<string, any>
  linterOptions?: Record<string, any>
  plugins?: Record<string, any>
  rules?: Record<string, any>
  files?: string[]
  settings?: Record<string, any>
  ignores?: string[]
  processor?: any
}

export interface Options {
  isTs: boolean
  isVue: boolean
  ignores: string[]
  overrides?: {
    javascript?: any
    typescript?: any
    jsonc?: any
    markdown?: any
    vue?: any
    imports?: any
    markdown?: any
  }
}

export interface ConfigItemOptions {
  overrides?: any
}
