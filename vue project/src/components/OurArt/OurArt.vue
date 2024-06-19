<script setup>
import Art from '@/components/Art/Art.vue'
</script>

<template>
  <header>
    <h1 class="header-h1">Your Art</h1>
  </header>
  <section class="museum">
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad"
    ></Art>
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad"
      titleTwo="Mona Lisa"
      pictureSrcTwo="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
    ></Art>
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457"
      titleTwo="Mona Lisa"
      pictureSrcTwo="https://images.unsplash.com/photo-1547891654-e66ed7ebb968"
    ></Art>
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/photo-1536924940846-227afb31e2a5"
      titleTwo="Mona Lisa"
      pictureSrcTwo="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
    ></Art>
  </section>
</template>

<style scoped>
.header-h1 {
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
.museum {
  background-color: #606c38;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  width: 90%;
  margin: auto;
}
</style>
