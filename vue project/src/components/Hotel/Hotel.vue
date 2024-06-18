<script setup>
import RatingStars from '@/components/RatingStars/RatingStars.vue'
defineProps({
  title: String,
  location: String,
  price: Number,
  link: String,
  imgSrc: String,
  rating: Number
})
</script>

<template>
  <article class="article-hotel">
    <img class="section-hotel-image" :src="imgSrc" />
    <article class="section-hotel-desc">
      <h2 class="section-hotel-text">{{ title }}</h2>
      <p class="section-hotel-tiny">{{ location }}</p>
      <section>
        <article class="section-header-stardiv">
          <RatingStars :quantity="rating" />
        </article>
        <p class="section-hotel-text">
          <slot name="text"></slot>
        </p>
        <article class="section-hotel-price">
          <h3>${{ price }}</h3>
          <a :href="link">
            <button>Check Availability</button>
          </a>
        </article>
      </section>
    </article>
  </article>
</template>

<style scoped>
.article-hotel {
  align-items: center;
  background-color: beige;
  display: flex;
  text-align: center;
  margin: -20px auto;
  width: 40%;
  height: 550px;
}

.section-hotel-image {
  width: 50%;
  align-items: center;
  padding: 15px;
  margin: 20px 0px;
}

.section-hotel-desc {
  display: grid;
  grid-template-columns: 1fr;
}

.section-hotel-text {
  text-align: left;
  border-bottom: 2px solid darkgreen;
  width: 90%;
  padding: 10px 2px 15px;
  margin: 0;
}

.section-hotel-tiny {
  width: 110px;
  text-align: left;
  border-bottom: 2px solid darkgreen;
  padding: 10px 2px 15px;
  margin: 0;
}

.section-hotel-price {
  border-bottom: 2px solid darkgreen;
  padding: 8px 1px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 60px;
}

.section-hotel-price button,
.section-hotel-price h3 {
  border-radius: 20px;
  margin: auto 15px;
  padding: auto;
  font-size: 18px;
}

.section-hotel-price button:active {
  transform: translateY(2px);
}

.section-hotel-price button {
  background-color: darkgreen;
  color: white;
  padding: 9px 15px;
}
.section-hotel-price button:hover {
  background-color: red;
}

.section-header-stardiv {
  align-items: center;
  background-color: beige;
  display: flex;
  height: 20px;
  padding: 5px 0px 10px;
}
</style>

<!-- convert art to component system  -->
