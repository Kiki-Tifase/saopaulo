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
  color: #003566;
  display: flex;
  text-align: center;
  font-size: 60px;
  font-style: oblique;
  text-shadow: rgb(18, 3, 218) 1px 0 5px;
}

.links:hover {
  color: red;
  text-shadow: rgb(84, 16, 16) 1px 0 10px;
}
</style>
