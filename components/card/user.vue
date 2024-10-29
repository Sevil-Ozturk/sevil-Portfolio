<script setup lang="ts">
import type { User } from '~/types'

const props = defineProps<{
  user: User
}>()// burda başlangıç değeri undefined olması açısından açılan () parantezini unutmuşsun
const todoStore = useTodoStore()
const _public = useRuntimeConfig().public

onMounted (async () => {
  await todoStore.fetchUserList()
})
</script>

<template>
  <div>
    <UCard class=" bg-primary-900">
      <template #default>
        <img :src="props.user.picture.large" alt="user picture" class="w-64">
      </template>
      <template #footer>
        {{ props.user.name.first }}''{{ props.user.name.last }}
      </template>
    </UCard>
  </div>
</template>
