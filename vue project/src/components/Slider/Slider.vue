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

    <button @click="arrowRight" class="buttonR">&#62;</button>
  </div>
</template>

<style>
.slide {
  width: 450px;
  height: 500px;
  background-color: #b33434;
  display: flex;
  border-radius: 10px;
}

.button {
  background-color: rgba(255, 255, 255, 0.5);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.buttonR {
  background-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
