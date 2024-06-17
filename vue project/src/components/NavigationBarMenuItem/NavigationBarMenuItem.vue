<script setup>
defineProps({
  name: String,
  link: String
})
</script>

<template>
  <a :href="link">
    <h2 class="rectangle-links">Our {{ name }}</h2>
  </a>
</template>

<style>
.rectangle-links {
  text-decoration: none;
}
</style>
