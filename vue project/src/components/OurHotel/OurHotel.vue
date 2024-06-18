<script setup>
import Hotel from '@/components/Hotel/Hotel.vue'
</script>

<template>
  <header>
    <h1 class="section-header-h1">Your Hotels</h1>
  </header>

  <Hotel
    title="Hotel"
    location="Rio De Janeiro"
    :price="499"
    :rating="5"
    imgSrc="https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad"
  >
    <template #text>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
      Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source.
    </template>
  </Hotel>
</template>
<style scoped>
.section-header-h1 {
  align-items: center;
  background-color: beige;
  color: #606c38;
  display: flex;
  font-size: 30px;
  height: 100px;
  justify-content: center;
  margin: 80px auto;
  padding: auto;
  text-align: center;
  width: 90%;
}
</style>
