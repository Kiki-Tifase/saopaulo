<script setup>
import Star from '@/components/RatingStars/Star.vue'
defineProps({
  quantity: Number
})
</script>

<template>
  <figure class="stars">
    <Star v-for="star in quantity" />
  </figure>
</template>

<style>
.stars {
  display: flex;
}
</style>
