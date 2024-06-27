<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Weather from '@/components/Weather/Weather.vue'

const isLoading = ref(false)
const hasError = ref(false)
const weather = ref(null)

const fetchWeather = async () => {
  hasError.value = false
  isLoading.value = true
  try {
    const response = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&current=temperature_2m,is_day,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max&timezone=auto'
    )

    weather.value = response.data
  } catch (error) {
    hasError.value = true
  }
  isLoading.value = false
}

fetchWeather()
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="hasError">Error</div>
  <Weather v-else :weather="weather" />
</template>
