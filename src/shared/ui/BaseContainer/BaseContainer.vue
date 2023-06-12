<script setup lang="ts">
defineSlots<{
  default: (props: any) => any
}>()
</script>
<template>
  <div class="w-full lg:container m-auto px-5">
    <slot name="default"></slot>
  </div>
</template>

<style scoped></style>
