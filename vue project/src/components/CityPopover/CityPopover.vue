<script setup>
import { ref } from 'vue'
import { positions } from '@/components/Popover/Positions.js'
import Popover from '@/components/Popover/Popover.vue'

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
</script>

<template>
  <div class="root">
    <Popover :position="position">
      <template #trigger>
        <div class="dot" />
      </template>
      <template #content>
        <figure class="figure">
          <img class="image" :src="imgSrc" />
          <figcaption class="caption">
            <slot name="caption"></slot>
          </figcaption>
        </figure>
      </template>
    </Popover>
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
  width: 700px;
  padding: 10px;
  gap: 20px;
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
