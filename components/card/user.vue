<script setup lang="ts">
const todoStore = useTodoStore()
const _public = useRuntimeConfig.public

onMounted (async () => {
  await todoStore.fetchUserList()
})
const props = defineProps<{
  user: User
}>
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
