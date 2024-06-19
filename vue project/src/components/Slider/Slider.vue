<script setup>
import Slide from '@/components/Slider/Slide.vue'
import { ref } from 'Vue'

const props = defineProps({
  images: Array
})

const currentImageIndex = ref(0)

function arrowLeft() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

function arrowRight() {
  if (currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++
  }
}
</script>

<template>
  <div class="slide">
    <button @click="arrowLeft" class="button">&#60;</button>

    <Slide
      v-for="(image, index) in images"
      v-show="currentImageIndex === index"
      :imgSrc="image.src"
      :text="image.text"
    ></Slide>

    <button @click="arrowRight" class="button">&#62;</button>
  </div>
</template>

<style>
.slide {
  width: 350px;
  height: 400px;
  background-color: #45425a;
  display: flex;
}

.starter {
  width: 200px;
  height: 200px;
  margin: 150px auto;
}

.button {
  background-color: rgba(255, 255, 255, 0.65);
}
</style>
