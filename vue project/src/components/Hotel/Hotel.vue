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
  <article class="hotel-div">
    <img class="hotel-image" :src="imgSrc" />
    <article class="hotel-desc">
      <h2 class="hotel-text">{{ title }}</h2>
      <p class="location">{{ location }}</p>
      <section>
        <article class="stardiv">
          <RatingStars :quantity="rating" />
        </article>
        <p class="hotel-text">
          <slot name="text"></slot>
        </p>
        <article class="price">
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
.hotel-div {
  align-items: center;
  background-color: beige;
  display: flex;
  text-align: center;
  margin: -20px auto;
  width: 40%;
  height: 550px;
}

.hotel-image {
  width: 50%;
  align-items: center;
  padding: 15px;
  margin: 20px 0px;
}

.hotel-desc {
  display: grid;
  grid-template-columns: 1fr;
}

.hotel-text {
  text-align: left;
  border-bottom: 2px solid darkgreen;
  width: 90%;
  padding: 10px 2px 15px;
  margin: 0;
}

.location {
  width: 110px;
  text-align: left;
  border-bottom: 2px solid darkgreen;
  padding: 10px 2px 15px;
  margin: 0;
}

.price {
  border-bottom: 2px solid darkgreen;
  padding: 8px 1px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 60px;
}

.price button,
.price h3 {
  border-radius: 20px;
  margin: auto 15px;
  padding: auto;
  font-size: 18px;
}

.price button:active {
  transform: translateY(2px);
}

.price button {
  background-color: darkgreen;
  color: white;
  padding: 9px 15px;
}
.price button:hover {
  background-color: red;
}

.stardiv {
  align-items: center;
  background-color: beige;
  display: flex;
  height: 20px;
  padding: 5px 0px 10px;
}
</style>

<!-- convert art to component system  -->
