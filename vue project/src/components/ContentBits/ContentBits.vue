<script setup>
defineProps({
  name: String,
  link: String
})
</script>

<template>
  <article>
    <a :href="link" class="section-links">
      <h3 class="section-contents-titles">Our {{ name }}</h3>
    </a>
  </article>
</template>

<style>
.section-contents-titles {
  display: flex;
  text-align: center;
  font-size: 30px;
  height: 20px;
  margin-left: 35px;
}

.section-links {
  color: #606c38;
  text-decoration: none;
}

.section-links:hover {
  color: #ecf39e;
}
</style>
