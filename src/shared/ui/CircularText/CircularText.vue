<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup lang="ts">
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'
import { computed } from 'vue'
const breakpoints = useBreakpoints()

const axisY = computed(() => (breakpoints.value.isXxs ? 28 : 30))
const { text, deg } = defineProps<{
  text: string
  deg: number
}>()
</script>
<template>
  <svg class="circle" viewBox="0 0 100 100">
    <path id="circle" :d="`M 0,${axisY} a 50,50 0 1,1 0,1 z`" />
    <text :transform="`rotate(${deg})`">
      <textPath xlink:href="#circle">{{ text }}</textPath>
    </text>
  </svg>
</template>
<style scoped>
.circle {
  position: absolute;
  display: block;
  overflow: visible;
}
.circle path {
  fill: none;
}
</style>
