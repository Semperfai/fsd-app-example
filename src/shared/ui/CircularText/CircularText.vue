<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup lang="ts">
const { text, deg } = defineProps<{
  text: string
  deg: number
}>()
</script>
<template>
  <svg class="circle" viewBox="0 0 100 100">
    <path id="circle" d="M 0,25 a 50,50 0 1,1 0,1 z" />
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
