<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <RouterView />

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
