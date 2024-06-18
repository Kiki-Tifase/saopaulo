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
  background-color: beige;
  width: 304px;
  justify-content: center;
  align-items: center;
  padding: auto 100px;
  text-align: center;
  position: fixed;
  z-index: 1;
}
</style>
