<script setup>
const props = defineProps({
  weather: Object
})

const isDay = props.weather.current.is_day
</script>

<template>
  <div>{{ weather.current.temperature_2m }} degrees celcius</div>
  <div>{{ isDay ? '🌇' : '🌃' }}</div>
  <div>{{ weather.current.weather_code === 3 ? '⛅' : '🌤️' }}</div>
</template>
