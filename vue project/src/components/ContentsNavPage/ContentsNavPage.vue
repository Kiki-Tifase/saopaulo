<script setup>
import ContentBits from '@/components/ContentBits/ContentBits.vue'
</script>

<template>
  <section class="header">
    <h2>Start Exploring</h2>
  </section>
  <main class="section-content">
    <section class="grid">
      <article class="links">
        <ContentBits link="/hotel" name="hotel"></ContentBits>
        <figure class="images hotel-section links" alt="Hotel"></figure>
      </article>
      <article class="links">
        <ContentBits link="/art" name="art"></ContentBits>
        <figure class="images art-section links" alt="Hotel"></figure>
      </article>
      <article class="links">
        <ContentBits link="/city" name="city"></ContentBits>
        <figure class="images city-section links" alt="Hotel"></figure>
      </article>
      <article class="links">
        <ContentBits link="/food" name="food"></ContentBits>
        <figure class="images food-section links" alt="Hotel"></figure>
      </article>
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
.hotel-section,
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

.hotel-section {
  background-image: url('@/assets/images/HOTEL.webp');
}

.art-section {
  background-image: url('@/assets/images/ART.webp');
  background-position-y: 50%;
}

.city-section {
  background-image: url('@/assets/images/michael-lechner-19eWcsdzGeE-unsplash.jpg');
}

.links {
  color: #606c38;
  text-decoration: none;
  margin: 25px 0px;
  font-weight: bolder;
  font-size: 90px;
}

.links:hover {
  color: #ecf39e;
}
</style>
