<script setup lang="ts">
const playVideo = (): void => {}
</script>
<template>
  <div class="mb-14 flex flex-col flex-[1_1_20%] self-end justify-center items-center">
    <div class="relative overflow-hidden mb-5 w-20 h-20 rounded-full">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        src="./assets/images/videoimg (2).png"
        alt="play-video"
      />
    </div>
    <button class="text-xl" @click="playVideo">Play Video</button>
  </div>
</template>
<style scoped></style>
