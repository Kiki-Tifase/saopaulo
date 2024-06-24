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
  <article class="figure-big-img-column" v-if="hasOneImage">
    <figure class="title-container-big">
      <img class="big-img" :src="pictureSrc" />
      <p class="title-text">{{ title }}</p>
    </figure>
  </article>

  <template v-else>
    <figure class="figure-sml-img-columns">
      <article class="title-container">
        <img :src="pictureSrc" class="sml-img" />
        <p class="title-text">{{ title }}</p>
      </article>
      <article class="title-container">
        <img :src="pictureSrcTwo" class="sml-img" />
        <p class="title-text">{{ titleTwo }}</p>
      </article>
    </figure>
  </template>
</template>

<style scoped>
/* where it gets crazy */

.title-container,
.title-container-big {
  position: relative;
  display: flex;
}

.title-container,
.smlimg1,
.big-img,
.title-container .title-text {
  transition: opacity 0.5s ease-in-out;
}
.title-container-big,
.smlimg1,
.big-img,
.title-container-big .title-text {
  transition: opacity 0.5s ease-in-out;
}

.title-container .title-text,
.title-container-big .title-text {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
}

.title-container:hover .sml-img .big-img {
  opacity: 0;
}
.title-container:hover .title-text {
  opacity: 1;
}
.title-container-big:hover .sml-img .big-img {
  opacity: 0;
}
.title-container-big:hover .title-text {
  opacity: 1;
}

.figure-sml-img-columns {
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: auto 0px;
}

.figure-big-img-column {
  display: flex;
  align-content: center;
  padding: 10px;
}

.title-text {
  font-size: 40px;
  text-align: center;
  color: white;
  background-color: #f7a072;
}

.sml-img {
  width: 100%;
}
.big-img {
  max-height: 100%;
  width: 100%;
}
</style>
