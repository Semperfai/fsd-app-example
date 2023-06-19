<script setup lang="ts">
import { BaseContainer } from '@/shared'
import { BaseButton } from '@/shared'
import { IconStar } from '@/shared'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'
import { VideoViewer } from '@/features'
import LatestProductCard from '../LatestProductCard/LatestProductCard.vue'
const breakpoints = useBreakpoints()
</script>
<template>
  <section class="py-16">
    <BaseContainer>
      <div class="flex justify-center gap-3 flex-col md:flex-row">
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
          <div class="relative flex w-full justify-between items-center">
            <VideoViewer class="lg:mb-14 sm:flex md:static absolute right-0 top-0 z-10" />
            <IconStar class="self-start lg:w-14 w-10" />
            <LatestProductCard />
            <IconStar class="self-end lg:w-14 w-10" />
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
