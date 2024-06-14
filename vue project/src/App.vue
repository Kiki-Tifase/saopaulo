<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
