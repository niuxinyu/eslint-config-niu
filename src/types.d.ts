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
    javascript?: Record<string, any>
    typescript?: Record<string, any>
    jsonc?: Record<string, any>
    markdown?: Record<string, any>
    vue?: Record<string, any>
    imports?: Record<string, any>
    markdown?: Record<string, any>
  }
}

export interface ConfigItemOptions {
  overrides?: Record<string, any>
}
