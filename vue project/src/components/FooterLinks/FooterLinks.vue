<script setup>
defineProps({
  name: String,
  link: String
})
</script>

<template>
  <a :href="link">
    <nav class="links">{{ name }}</nav>
  </a>
</template>

<style scoped>
.links {
  color: white;
  display: flex;
  text-align: center;
  font-size: 305%;
  font-style: oblique;
  text-shadow: #723486 5px 5px 5px;
}

.links:hover {
  color: red;
  text-shadow: rgb(84, 16, 16) 1px 0 10px;
}
</style>
