import { copyFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

await copyFile(join(__dirname, '../src/types.d.ts'), join(__dirname, '../dist/types.d.ts'))

globalThis.console.log('文件拷贝成功')