<script setup></script>

<template>
  <img class="image" src="../../assets/images/brazilbg.jpeg" />
  <section class="overlay-div">
    <h2 class="overlay-title">Explore Brazil</h2>
    <p class="overlay-paragraph">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
      Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source.
    </p>
  </section>
</template>

<style scoped>
.image {
  width: 2560px;
  height: 1300px;
}

.header-overlay {
  position: relative;
  text-align: center;
}

.overlay-title {
  font-size: 40px;
  margin: 25px 0 0 25px;
  color: white;
}

.overlay-paragraph {
  margin: 20px 25px;
  font-size: larger;
  line-height: 1.5;
  color: white;
}

.overlay-div {
  width: 600px;
  height: 350px;
  background-color: #283618;
  position: absolute;
  bottom: 150px;
  left: 200px;
  opacity: 70%;
  font-size: smaller;
  padding: auto;
  display: flex;
  flex-direction: column;
  font: white;
}
</style>
