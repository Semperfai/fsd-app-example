<script setup lang="ts">
import { BaseContainer } from '@/shared'
import { BaseButton } from '@/shared'
import { IconStar } from '@/shared'
import { ref } from 'vue'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'
import { CircularText } from '@/shared'
import { VideViewer } from '@/features'
const breakpoints = useBreakpoints()
const testCircularText = ref<string>('Read Beats Ml9c2zm/a')
</script>
<template>
  <section class="py-16">
    <BaseContainer>
      <div class="flex justify-center gap-3">
        <div class="h-auto flex-[1_1_40%] lg:py-14 md:py-7">
          <h1
            class="lg:mb-8 mb-5 lg:text-6xl sm:text-3xl text-2xl font-semibold [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)]"
          >
            Discover Our Latest Products
          </h1>
          <p class="lg:mb-14 mb-8 lg:text-2xl md:text-xl text-sm">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
            product
          </p>
          <BaseButton
            :size="breakpoints.isLg ? 'large' : breakpoints.isSm ? 'medium' : 'small'"
            class="lg:mb-28 md:mb-20 mb-14 rounded-xl"
            type="primary"
            text="Buy Now"
          />
        </div>
        <div class="h-auto flex flex-[1_1_40%]">
          <div class="flex w-full justify-between items-center">
            <VideViewer/>
            <IconStar class="self-start" />
            <div
              class="relative flex h-4/5 flex-col bg-latest-product items-center justify-center rounded-[136px]"
            >
              <CircularText :text="testCircularText" :deg="-5" class="w-80 font-semibold text-xs" />
              <img class="mb-9" src="./assets/images/image 6.png" alt="latest product" />
              <p class="text-3xl font-semibold">$50</p>
            </div>
            <IconStar class="self-end" />
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
