<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import HeaderImage from '@/components/HeaderImage/HeaderImage.vue'
import ContentsNavPage from '@/components/ContentsNavPage/ContentsNavPage.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <header>
    <NavigationBar />
    <HeaderImage />
    <ContentsNavPage />
    <Footer />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
