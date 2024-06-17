<script setup></script>

<template>
  <img class="header-image" src="../../assets/images/brazilbg.jpeg" />
  <section class="header-overlay-text">
    <h2 class="header-overlay-title">Explore Brazil</h2>
    <p class="header-overlay-paragraph">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
      Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
      1.10.32 and 1.10.33 of
    </p>
  </section>
</template>

<style>
.header-overlay-text {
  font: white;
}

.header-image {
  width: 1150px;
}

.header-overlay {
  position: relative;
  text-align: center;
}

.header-overlay-title {
  font-size: 40px;
  margin: 25px 0 0 25px;
  color: white;
}

.header-overlay-paragraph {
  margin: 20px 25px;
  font-size: larger;
  line-height: 1.5;
  color: white;
}

.header-overlay-text {
  width: 500px;
  height: 250px;
  background-color: #283618;
  position: absolute;
  bottom: 550px;
  left: 700px;
  opacity: 70%;
  font-size: smaller;
  padding: auto;
  display: flex;
  flex-direction: column;
}
</style>
