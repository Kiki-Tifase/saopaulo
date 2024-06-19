<script setup>
defineProps({
  imgSrc: String,
  text: String
})
</script>

<template>
  <figure class="slide">
    <img :src="imgSrc" class="starter" />
    <figcaption>{{ text }}</figcaption>
  </figure>
</template>

<style>
.slide {
  width: 350px;
  height: 400px;
  background-color: #45425a;
  display: flex;
}
</style>
