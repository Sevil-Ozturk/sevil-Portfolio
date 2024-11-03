<script setup lang="ts">
import type { User } from '~/types'

const props = defineProps<{
  user: User
}>()
</script>

<template>
  <div>
    <Card>
      <template #default>
        <img :src="props.user.picture.large" alt="user picture" class="w-64 rounded-full">
      </template>
      <template #footer>
        {{ props.user.name.first }} {{ props.user.name.last }}
      </template>
    </Card>
  </div>
</template>

<style>

</style>
