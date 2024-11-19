<script setup lang="ts">
definePageMeta({
  name: 'todo',
})

const todoStore = useTodoStore()

onMounted(async () => {
  await todoStore.fetchDataList()
})

function gotoTodoDetail(id: string) {
  navigateTo(`/todo/${id}`)
}

// const selectedUser =

// const selected = ref(selectedUser[0])

// GÖREV 2
// elindeki userId lere göre bu kullanıcıların resimlerini ve isimlerini göstermelisin https://randomuser.me/
// bunun için Todo tipini değiştirmen gerekecek yeni tipte nasıl bir yapı izleyeceğin çok önemli.
// opsiyonel: zorluk istiyorsan fakerapi kullanarak kullanıcı bilgilerini detaylandırabilirsin ama bu yola girersen todonun eklenme tarihini görmek ve bunu filtreleyebilmek isterim

// yapılan görevler, yapılmayan görevler ve tümünü göster filtresi olmalı
// aynı kullanıcının birden fazla taskı olabiliyor, kullanıcıya göre filtrelenebilmeli. nuxtui dan selectmenu kullanarak bu filtrelemeyi yapmalısın ve filtrelerken userların resimlerini de görmek istiyorum
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="flex w-full h-full flex justify-center items-center"
    >
      <div class="size-64">
        <USelectMenu
          :options="todoStore.dataList.map(user =>
            ({
              label: `${user.name.first} ${user.name.last}`,
              avatar: user.picture.thumbnail,
            }))"
        >
          <!-- <UAvatar v-if="selected?.avatar" :src="selected.avatar" size="2xs" /> -->
        </USelectMenu>
      </div>
      <div class="flex flex-col gap-2 w-7/12 h-4/6 overflow-auto border rounded dark:border-gray-700 border-gray-300 w-full h-full">
        <div
          v-for="(data, index) in todoStore.dataList" :key="index"
          class="w-full flex justify-between items-center py-2 px-3 border-b"
          @click="gotoTodoDetail(data.login.uuid)"
        >
          <div class="flex gap-4 items-center">
            <img :src="data.picture.thumbnail" class="rounded-full">
            <label> {{ `${data.name.first} ${data.name.last}` }} </label>
          </div>
          <label> {{ `${data.todos.length} adet görev mevcut` }} </label>
        </div>
      </div>
    </div>
  </NuxtLayout>

  <!-- <div v-if="todoStore.dataList.length !== 40" class="z-50 flex justify-center items-center fixed w-screen h-screen bg-gray-950/75">
    <div class="w-8 h-8 border animate-spin" />
  </div> -->
</template>
