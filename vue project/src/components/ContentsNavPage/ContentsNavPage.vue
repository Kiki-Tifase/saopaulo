<script setup>
import ContentBits from '@/components/ContentBits/ContentBits.vue'
</script>

<template>
  <section class="section-contents-header">
    <h2>Start Exploring</h2>
  </section>
  <main class="section-content">
    <section class="section-content-grid">
      <article class="section-links">
        <ContentBits link="/hotel" name="hotel"></ContentBits>
        <figure
          class="section-contents-images section-content-hotel section-links"
          alt="Hotel"
        ></figure>
      </article>
      <article class="section-links">
        <ContentBits link="/art" name="art"></ContentBits>
        <figure
          class="section-contents-images section-content-art section-links"
          alt="Hotel"
        ></figure>
      </article>
      <article class="section-links">
        <ContentBits link="/city" name="city"></ContentBits>
        <figure
          class="section-contents-images section-content-city section-links"
          alt="Hotel"
        ></figure>
      </article>
      <article class="section-links">
        <ContentBits link="/food" name="food"></ContentBits>
        <figure
          class="section-contents-images section-content-food section-links"
          alt="Hotel"
        ></figure>
      </article>
    </section>
  </main>
</template>

<style scoped>
.section-contents-header {
  align-items: center;
  background-color: beige;
  color: #606c38;
  display: flex;
  font-size: 30px;
  height: 100px;
  justify-content: center;
  padding: auto;
  text-align: center;
  margin-top: 100px;
  width: 100%;
}

.section-content {
  justify-content: space-around;
  display: flex;
  max-height: none;
  align-items: center;
  width: 100%;
}

.section-content-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
}

.section-contents-images {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 250px;
  height: 400px;
}

.section-content-food,
.section-content-hotel,
.section-content-art,
.section-content-city {
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  border-radius: 30px;
}
.section-links:hover {
  color: #ecf39e;
}

.section-content-food {
  background-image: url('@/assets/images/sml-img7.avif');
}

.section-content-hotel {
  background-image: url('@/assets/images/HOTEL.webp');
}

.section-content-art {
  background-image: url('@/assets/images/ART.webp');
  background-position-y: 50%;
}

.section-content-city {
  background-image: url('@/assets/images/city.avif');
}

.section-links {
  color: #606c38;
  text-decoration: none;
}

.section-links:hover {
  color: #ecf39e;
}
</style>
