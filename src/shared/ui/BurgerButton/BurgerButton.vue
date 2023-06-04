<script setup lang="ts">
import { type Props } from './types'
withDefaults(defineProps<Partial<Props>>(), {})
</script>
<template>
  <button class="relative h-8 w-9 bg-transparent">
    <span
      class="absolute w-full top-1/2 -translate-y-[calc(50%+6px)] left-0 h-1 bg-black rounded-sm transition-transform"
      :class="[open ? ' -translate-y-[calc(25%-1px)] rotate-45' : '']"
    ></span>
    <span
      class="absolute w-full top-1/2 left-0 h-1 bg-black rounded-sm transition-transform"
      :class="[open ? ' translate-y-0 scale-x-0' : '']"
    ></span>
    <span
      class="absolute w-full top-1/2 -translate-y-[calc(50%-10px)] left-0 h-1 bg-black rounded-sm transition-transform"
      :class="[open ? '  translate-y-[calc(25%+-1px)]  -rotate-45' : '']"
    ></span>
  </button>
</template>

<style scoped></style>
