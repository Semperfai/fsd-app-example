<script setup lang="ts">
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
import { type Props } from './types'
import { ref } from 'vue'
const buttonId = ref(generateUniqueID('button'))
withDefaults(defineProps<Partial<Props>>(), {
  text: 'Play Video'
})
</script>
<template>
  <label
    :for="buttonId"
    class="flex flex-col flex-[1_1_20%] self-end justify-center items-center animate-bounce sm:animate-none cursor-pointer"
  >
    <div class="relative overflow-hidden lg:mb-5 mb-3 lg:w-20 lg:h-20 w-16 h-16 rounded-full">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        src="./__tmp_assets/videoimg (2).png"
        alt="play-video"
      />
    </div>
    <button :disabled="disabled" :id="buttonId" class="text-sm lg:text-xl">
      {{ text }}
    </button>
  </label>
</template>
<style scoped></style>
