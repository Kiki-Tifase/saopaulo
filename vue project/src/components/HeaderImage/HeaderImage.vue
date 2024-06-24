<script setup></script>

<template>
  <figure class="image">
    <section class="overlay-div">
      <h2 class="overlay-title">This is Brazil</h2>
    </section>
  </figure>
</template>

<style scoped>
.image {
  margin: 20px auto;
  width: 2250px;
  height: 950px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  background-image: url('../../assets/images/filip-gielda-QKrLdkoYDrc-unsplash.jpg');
  background-size: cover;
  background-position-y: 50%;
}

.header-overlay {
  position: relative;
  text-align: center;
}

.overlay-title {
  font-size: 60px;
  color: white;
}

.overlay-div {
  width: 600px;
  height: 100px;
  position: absolute;
  bottom: 265px;
  left: 200px;
  font-size: smaller;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0pc 0px 30px 30px;
}
</style>
