<script setup>
import ContentBits from '@/components/ContentBits/ContentBits.vue'
</script>

<template>
  <section class="header">
    <h2>Start Exploring</h2>
  </section>
  <main class="section-content">
    <section class="grid">
      <ContentBits link="/art" name="art" theme="art"></ContentBits>
      <ContentBits link="/city" name="city" theme="city"></ContentBits>
      <ContentBits link="/hotel" name="hotel" theme="hotel"></ContentBits>
      <ContentBits link="/food" name="food" theme="food"></ContentBits>
    </section>
  </main>
</template>

<style scoped>
.header {
  align-items: center;
  background-color: #dde8f4;
  color: #23395b;
  display: flex;
  font-size: 30px;
  height: 100px;
  justify-content: center;
  padding: auto;
  text-align: center;
  margin-top: 100px;
  width: 100%;
  font-weight: 60px;
}

.section-content {
  justify-content: space-around;
  display: flex;
  max-height: none;
  align-items: center;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
}

.images {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 500px;
  height: 800px;
}

.food-section,
.art-section,
.city-section {
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  border-radius: 30px;
}

.food-section {
  background-image: url('@/assets/images/alex-munsell-auIbTAcSH6E-unsplash.jpg');
}

.art-section {
  background-image: url('@/assets/images/ART.webp');
  background-position-y: 50%;
}

.city-section {
  background-image: url('@/assets/images/michael-lechner-19eWcsdzGeE-unsplash.jpg');
}

.links {
  text-decoration: none;
  margin: 25px 0px;
  font-weight: bolder;
  font-size: 90px;
}
</style>
