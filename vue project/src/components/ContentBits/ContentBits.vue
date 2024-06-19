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
  font-size: 30px;
  height: 20px;
  margin-left: 35px;
}

.links {
  color: #606c38;
  text-decoration: none;
}

.links:hover {
  color: #ecf39e;
}
</style>
