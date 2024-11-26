<script setup lang="ts">
const todoStore = useTodoStore()

onMounted(async () => {
  await todoStore.fetchDataList()
})

const selected = ref()
</script>

<template>
  <USelectMenu
    v-model="selected"
    :options="todoStore.dataList.map(user =>
      ({
        label: `${user.name.first} ${user.name.last}`,
        avatar: { src: user.picture.thumbnail },
      }))"
    searchable-placeholder="Search a person..."
    placeholder="Select a person"
    searchable
    clear-search-on-close
    size="xl"
    icon="i-lucide-user"
    class="w-80"
    value=""
  />
</template>
