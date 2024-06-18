<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  pictureSrc: String,
  titleTwo: String,
  pictureSrcTwo: String
})

const hasOneImage = computed(() => {
  return !props.titleTwo
})
</script>

<template>
  <article class="figure-big-img-columns" v-if="hasOneImage">
    <figure class="logo-holder-big">
      <img class="sml-img2" src="https://images.unsplash.com/photo-1563786785330-2ad8162ef53a" />
      <p class="text">{{ title }}</p>
    </figure>
  </article>

  <template v-else>
    <figure class="figure-sml-img-columns">
      <article class="logo-holder">
        <img :src="pictureSrc" class="sml-img1" />
        <p class="text">{{ title }}</p>
      </article>
      <article class="logo-holder">
        <img :src="pictureSrcTwo" class="sml-img1" />
        <p class="text">{{ titleTwo }}</p>
      </article>
    </figure>
  </template>
</template>

<style scoped>
/* where it gets crazy */

.logo-holder,
.logo-holder-big {
  position: relative;
  display: flex;
}

.logo-holder,
.smlimg1,
.sml-img2,
.logo-holder .text {
  transition: opacity 0.5s ease-in-out;
}
.logo-holder-big,
.smlimg1,
.sml-img2,
.logo-holder-big .text {
  transition: opacity 0.5s ease-in-out;
}

.logo-holder .text,
.logo-holder-big .text {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
}

.logo-holder:hover .sml-img1 .sml-img2 {
  opacity: 0;
}
.logo-holder:hover .text {
  opacity: 1;
}
.logo-holder-big:hover .sml-img1 .sml-img2 {
  opacity: 0;
}
.logo-holder-big:hover .text {
  opacity: 1;
}

.figure-sml-img-columns {
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.figure-big-img-columns {
  display: flex;
  align-content: center;
  padding: 10px;
}

.text {
  font-size: 40px;
  bottom: 0;
  opacity: 0;
  color: black;
  background-color: white;
}

.sml-img1 {
  width: 100%;
}
.sml-img2 {
  max-height: 100%;
  width: 100%;
}

.sml-img3 {
  width: 60%;
}
</style>
