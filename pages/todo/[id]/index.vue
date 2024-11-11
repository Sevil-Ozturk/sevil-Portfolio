<script setup lang="ts">
const todoStore = useTodoStore()
const route = useRoute()
definePageMeta({
  name: 'todoDetail',
})
onMounted(async () => {
  await todoStore.fetchDataList()
})
const todoId = String(route.params.id)
const userTodos = computed(() => {
  return todoStore.dataList.find(user => user.id === todoId)
})
// const userTodos = computed(() => todoStore.dataList)
// .find(user => user.id === todoId)
</script>

<template>
  <div class="flex bg-gray-900 w-7/12 h-4/6 justify-items-center items-center">
    <div class="bg-gray-300 w-96 h-96">
      {{ userTodos?.gender }}
      <img :src="userTodos?.picture.medium" class="rounded-full border-2 border-sky-400">
      <h2>{{ userTodos?.name.first }} {{ userTodos?.name.last }}</h2>
    </div>
  </div>
</template>
