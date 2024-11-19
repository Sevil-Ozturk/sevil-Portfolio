<script setup lang="ts">
const todoStore = useTodoStore()
const route = useRoute()
definePageMeta({
  name: 'todoDetail',
})
onMounted(async () => {
  await todoStore.fetchDataList()
  todoStore.loadFromLocalStorage()
})

const todoId = String(route.params.id)
const userTodos = computed(() => {
  return todoStore.dataList.find(data => data.login.uuid === todoId)
})
</script>

<template>
  <div
    v-if="userTodos" class="fixed top-0 left-0 w-full h-full p-8
    bg-gradient-to-r from-orange-400 via-purple-500 to-green-500
    dark:from-pink-600 dark:via-purple-700 dark:to-blue-600
    poppins"
  >
    <div class=" flex w-full h-full dark:bg-gray-900 bg-gray-100 rounded-xl overflow-hidden ">
      <div class="w-[350px] h-full justify-items-center p-5 text-xl">
        <img :src="userTodos?.picture.large" class="rounded-full w-48 h-48 border-sky-400">
        <h2>{{ userTodos?.name.first }} {{ userTodos?.name.last }}</h2>
        <div class="p-2 border-5">
          <h2 class="mb-3 text-xl font-bold text-[red]">
            Kullanıcı Bilgileri
          </h2>
          <p><span class="font-medium">Cinsiyet:</span> {{ userTodos.gender }}</p>
          <p><span class="font-medium">Yaş:</span> {{ userTodos.dob.age }}</p>
          <p><span class="font-medium">Doğum Tarihi:</span> {{ new Date(userTodos.dob.date).toLocaleDateString() }}</p>
          <p>
            <span class="font-medium">Konum:</span>
            {{ userTodos.location.street.number }}
            {{ userTodos.location.street.name }},
            {{ userTodos.location.city }},
            {{ userTodos.location.state }},
            {{ userTodos.location.country }}
          </p>
        </div>
      </div>

      <div class="w-full pt-5 pr-5 overflow-y-auto">
        <!-- burası sadece deneme için açılmış bir div -->
        <h1 class="text-xl">
          -- GÖREV LİSTESİ --
        </h1>
        <div v-for="(todo, index) in userTodos?.todos" :key="index " class="w-full flex justify-between items-center py-2 px-3 border-b rounded-full">
          <!-- <img :src="userTodos?.picture.thumbnail" :alt="`${userTodos?.name.first} ' ' ${userTodos.name.last}  `" class="rounded-full"> -->
          <p> -> {{ todo.title }}</p>
          <div>
            <input v-model="todo.completed" type="checkbox">
            <span v-if="todo.completed" class="text-green-600">Görev Tamamlandı</span>
            <span v-else class="text-red-600">Görev henüz Tamamlanmadı</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
