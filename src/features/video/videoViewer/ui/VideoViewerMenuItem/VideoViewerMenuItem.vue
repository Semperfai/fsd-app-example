<script setup lang="ts"></script>

<template>
  <div
    class="px-4 py-2 whitespace-nowrap flex flex-row gap-2 items-center hover:bg-green-800 cursor-pointer text-white"
    :tabindex="0"
  >
    <slot />
  </div>
</template>
