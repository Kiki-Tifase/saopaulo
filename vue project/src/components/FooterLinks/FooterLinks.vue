<script setup>
defineProps({
  name: String,
  link: String
})
</script>

<template>
  <a :href="link">
    <nav class="footer-links">{{ name }}</nav>
  </a>
</template>
