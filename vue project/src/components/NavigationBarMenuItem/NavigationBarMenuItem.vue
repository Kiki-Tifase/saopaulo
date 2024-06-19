<script setup>
defineProps({
  name: String,
  link: String
})
</script>

<template>
  <a :href="link" class="linksdiv">
    <h2 class="rectangle-links">Our {{ name }}</h2>
  </a>
</template>

<style scoped>
.rectangle-links {
  color: white;
  text-decoration: underline;
  font-size: 30px;
}
</style>
