<script setup>
defineProps({
  name: String,
  link: String
})
</script>

<template>
  <article>
    <a :href="link" class="links">
      <h3 class="titles">Our {{ name }}</h3>
    </a>
  </article>
</template>

<style scoped>
.titles {
  display: flex;
  text-align: center;
  font-size: 55px;
  height: 20px;
  margin-left: 20px;
  text-shadow: white 1px 1px 0px;
}

.links {
  color: #23395b;
  text-decoration: none;
}

.links:hover {
  color: #ecf39e;
}
</style>
