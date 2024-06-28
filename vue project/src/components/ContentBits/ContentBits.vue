<script setup>
import { themes } from './Themes'

defineProps({
  name: String,
  link: String,
  theme: {
    type: String,
    validator: (value) => {
      return themes.includes(value)
    }
  }
})
</script>

<template>
  <article>
    <a class="links" :href="link">
      <h3 class="titles">Our {{ name }}</h3>
      <figure :class="['images', theme, 'links']" alt="Hotel"></figure>
    </a>
  </article>
</template>

<style scoped>
.titles {
  display: flex;
  text-align: center;
  font-size: 55px;
  height: 20px;
  margin-left: 20px;
  text-shadow: white 1px 1px 0px;
}

.links {
  color: #23395b;
  text-decoration: none;
}

.links:hover {
  color: #723486;
}
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
.hotel:hover {
  color: #ecf39e;
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

.food,
.hotel,
.art,
.city {
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  border-radius: 30px;
}

.food {
  background-image: url('@/assets/images/alex-munsell-auIbTAcSH6E-unsplash.jpg');
}

.hotel {
  background-image: url('@/assets/images/HOTEL.webp');
}

.art {
  background-image: url('@/assets/images/ART.webp');
  background-position-y: 50%;
}

.city {
  background-image: url('@/assets/images/michael-lechner-19eWcsdzGeE-unsplash.jpg');
}

.links {
  text-decoration: none;
  margin: 25px 0px;
  font-weight: bolder;
  font-size: 90px;
}
</style>
