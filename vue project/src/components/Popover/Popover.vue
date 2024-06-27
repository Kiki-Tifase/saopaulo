<script setup>
import { ref } from 'vue'
import { positions } from '@/components/Popover/Positions.js'

defineProps({
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
    <button class="trigger" @click="togglePopover">
      <slot name="trigger"></slot>
    </button>
    <div :class="['tooltip', position]" v-if="showPopover">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.root {
  position: relative;
  height: fit-content;
}

.trigger {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
}

.tooltip {
  display: flex;
  position: absolute;

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
</style>
