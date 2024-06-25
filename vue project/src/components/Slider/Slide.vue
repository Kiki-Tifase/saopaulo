<script setup>
defineProps({
  imgSrc: String,
  text: String
})
</script>

<template>
  <figure class="title-food">
    <figcaption class="title">{{ text }}</figcaption>
    <img :src="imgSrc" class="food" />
  </figure>
</template>

<style scoped>
.title {
  width: 350px;
  color: white;
  text-align: center;
  margin: auto;
  font-size: 30px;
}

.food {
  width: 310px;
  height: 350px;
  margin: 0px 45px 0px 45px;
  object-fit: cover;
}

.title-food {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
