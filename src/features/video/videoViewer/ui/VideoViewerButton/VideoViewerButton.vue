<script setup lang="ts">
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
import { type Props } from './types'
import { ref } from 'vue'
const buttonId = ref(generateUniqueID('button'))
withDefaults(defineProps<Partial<Props>>(), {
  text: 'Play Video'
})
defineEmits(['click'])
</script>
<template>
  <div class="mb-14 flex flex-col flex-[1_1_20%] self-end justify-center items-center">
    <div class="relative overflow-hidden mb-5 w-20 h-20 rounded-full">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        src="./__tmp_assets/videoimg (2).png"
        alt="play-video"
      />
    </div>
    <button :disabled="disabled" :id="buttonId" @click="method" class="text-xl">{{ text }}</button>
  </div>
</template>
<style scoped></style>
