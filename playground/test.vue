<script setup>
import { computed, h, ref } from 'vue'

import { NButton, NLayout, NLayoutContent, NLayoutSider, NMenu } from 'naive-ui'
import { createPinia } from 'pinia'
import { useRouter } from 'vue-router'

import { SvgIcon } from '@/components/common'

const router = useRouter()
console.log(createPinia)

function renderIcon(icon) {
  return () =>
    h(SvgIcon, {
      icon,
    })
}

// TODO 后续也移动到后台返回的路由表中
const menuOptions = [
  {
    label: '已注册用户',
    key: 'RegisterUser',
    icon: renderIcon('ph:users'),
  },
  {
    label: '聊天记录',
    key: 'ChatHistory',
    icon: renderIcon('ph:chat'),
  },
  {
    label: 'token记录',
    key: 'TokenRecords',
    icon: renderIcon('ph:files'),
  },
  {
    label: '短信配置',
    key: 'SmsConfig',
    icon: renderIcon('ri:message-line'),
  },
  {
    label: 'modal记录',
    key: 'ModalList',
    icon: renderIcon('ph:browsers'),
  },
]

const collapsed = ref(true)

const handleMouseenter = () => {
  collapsed.value = false
}

const handleMouseleave = () => {
  collapsed.value = true
}

const handleMenuClick = (key) => {
  router.push({
    name: key,
    query: {
      // 标记当前路由跳转在 admin 中
      isA: 'true',
    },
  })
}

const handleGoBackChat = () => {
  router.replace({
    name: 'Chat',
  })
}

const menuDefaultValueRef = computed(() => {
  return router.currentRoute.value.name
})
</script>

<template>
  <NLayout class="h-full" has-sider>
    <NLayoutSider
      position="absolute"
      :collapsed="collapsed"
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    >
      <div class="mt-[40px]" />
      <NMenu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :on-update:value="handleMenuClick"
        :default-value="menuDefaultValueRef"
      />
    </NLayoutSider>
    <NLayout class="ml-[66px]">
      <NLayoutContent class="pt-[40px] pb-[60px] pl-[40px] pr-[40px]">
        <div class="flex justify-start pb-[20px]">
          <NButton type="primary" @click="handleGoBackChat">返回主页面</NButton>
        </div>
        <RouterView />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style scoped></style>
