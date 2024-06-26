<script setup>
import { ref } from 'vue'
import { positions } from '@/components/CityPopover/Positions.js'

defineProps({
  imgSrc: String,
  position: {
    type: String,
    default: 'bottom-right',
    validator: (value) => {
      return positions.includes(value)
    }
  }
})

const showPopover = ref(false)

const togglePopover = () => {
  showPopover.value = !showPopover.value
}
</script>

<template>
  <div class="root">
    <button class="dot" @click="togglePopover" />
    <figure :class="['figure', position]" v-if="showPopover">
      <img class="image" :src="imgSrc" />
      <figcaption class="caption">
        <slot name="caption"></slot>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.root {
  position: relative;
  height: fit-content;
}

.dot {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #f46ac4;
  cursor: pointer;
  border: solid 2px #dde8f4;
}

.dot {
  &:hover {
    background-color: #dde8f4;
  }
}

.figure {
  display: flex;
  background-color: white;
  border: 4px solid #f46ac4;
  border-radius: 10px;
  position: absolute;
  width: 700px;
  padding: 10px;
  gap: 20px;

  &.bottom {
    top: 40px;
    left: -350px;
  }
  &.top {
    bottom: 40px;
    left: -350px;
  }
  &.top-left {
    bottom: 40px;
    right: 0;
  }
  &.top-right {
    bottom: 40px;
  }
  &.bottom-left {
    right: 0;
  }
  &.bottom-right {
    left: 0;
  }
}

.image {
  height: 150px;
  margin: auto;
}

.caption {
  text-align: center;
  margin: auto;
}
</style>
