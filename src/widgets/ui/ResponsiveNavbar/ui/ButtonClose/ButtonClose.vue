<script setup lang="ts">
import { type Props } from './types'
defineProps<Partial<Props>>()
</script>
<template>
  <button @click="method" class="relative h-7 w-5 bg-transparent">
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45"
    ></span>
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out opacity-0"
    ></span>
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -rotate-45"
    ></span>
  </button>
</template>
