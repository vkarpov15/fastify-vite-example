<template>
  <router-view v-slot="{ Component }">
    <h1>My App</h1>
    <component :key="route.path" :is="Component" />
  </router-view>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  setup () {
    return { route: useRoute() }
  }
}
</script>