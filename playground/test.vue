<script setup>
import { onMounted } from 'vue'

import { NConfigProvider } from 'naive-ui'

import { NaiveProvider } from '@/components/common'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'

import { getUID } from './utils/uid'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()

onMounted(async () => {
  // 为当前的浏览器生成指纹信息
  await getUID()
})
</script>

<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language[0]"
    :date-locale="language[1]"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
