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
      <div class="starname">
        <h2 class="hotel-text1">{{ title }}</h2>
        <article class="stardiv">
          <RatingStars :quantity="rating" />
        </article>
      </div>
      <p class="location">{{ location }}</p>
      <section>
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
* {
  border: 1px red;
}
.hotel-div {
  align-items: center;
  background-color: #dde8f4;
  display: flex;
  text-align: center;
  margin: 45px auto;
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
  border-bottom: 2px solid #2d7824;
  width: 90%;
  padding: 10px 2px 8px;
  margin: 0;
  color: #23395b;
}

.hotel-text1 {
  text-align: left;
  border-bottom: 2px solid #2d7824;
  width: 100%;
  padding: 10px 2px 0px;
  margin: 0;
  color: #23395b;
  line-height: 27px;
}

.location {
  width: 45%;
  text-align: left;
  border-bottom: 2px solid #2d7824;
  padding: 10px 2px 1px;
  margin: 0;
}

.price {
  border-bottom: 2px solid #2d7824;
  padding: 8px 1px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 60px;
}

.price button,
.price h3 {
  border-radius: 8px;
  margin: auto 15px;
  padding: auto;
  font-size: 18px;
}

.price button:active {
  transform: translateY(2px);
}

.price button {
  background-color: #23395b;
  color: white;
  padding: 9px 15px;
}
.price button:hover {
  background-color: #ffef2c;
}

.stardiv {
  align-items: center;
  display: flex;
  height: 20px;
  padding: 25px 0px 0 60px;
}

.starname {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
