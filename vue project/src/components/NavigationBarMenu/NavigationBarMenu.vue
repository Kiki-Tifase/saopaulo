<script setup>
import NavigationBarMenuItem from '@/components/NavigationBarMenuItem/NavigationBarMenuItem.vue'
</script>
<template>
  <div class="drop-down-rectangle">
    <NavigationBarMenuItem name="Art" link="/art"></NavigationBarMenuItem>
    <NavigationBarMenuItem name="City" link="/city"></NavigationBarMenuItem>
    <NavigationBarMenuItem name="Hotel" link="/hotel"></NavigationBarMenuItem>
    <NavigationBarMenuItem name="Food" link="/food"></NavigationBarMenuItem>
  </div>
</template>

<style scoped>
.drop-down-rectangle {
  height: 1720px;
  background-color: #8ea8c3;
  width: 300px;
  position: fixed;
  z-index: 1;
  color: red;
  padding: 450px 20px;
}
</style>
