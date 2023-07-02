<script setup lang="ts">
import { IconStar } from '@/shared'
import { CircularText } from '@/shared'
import { ref } from 'vue'
const testCircularText = ref<string>('Read Beats Ml9c2zm/a')
</script>
<template>
  <div class="flex w-full justify-evenly items-center">
    <IconStar class="self-start lg:w-14 w-10" />
    <div
      class="relative flex h-4/5 flex-col bg-latest-product items-center justify-center rounded-[136px]"
    >
      <CircularText
        :text="testCircularText"
        :deg="-5"
        class="lg:w-80 lg:text-xs font-semibold sm:text-[10px] text-[8px]"
      />
      <img
        class="mb-9 aspect-square max-w-xs max-h-72"
        src="../LatestProductSection/assets/images/prod.png"
        alt="latest product"
      />
      <p class="lg:text-3xl text-2xl font-semibold">$50</p>
    </div>
    <IconStar class="self-end lg:w-14 w-10" />
  </div>
</template>
