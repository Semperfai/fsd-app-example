<script setup lang="ts">
import { BaseButton } from '@/shared'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'
import { VideoViewerButton } from '@/features'
import { VideoViewerPlayer } from '@/features'
import LatestProductCard from '../LatestProductCard/LatestProductCard.vue'
import LatestProductSectionLayout from '../LatestProductSectionLayout/LatestProductSectionLayout.vue'
import { ref } from 'vue'
const testDescribeSection = {
  title: 'Discover Our Latest Products',
  subtitle:
    'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product'
}
const breakpoints = useBreakpoints()
const playVideo = () => {
  show.value = !show.value
}
const show = ref(false)
</script>
<template>
  <section class="py-16">
    <LatestProductSectionLayout>
      <template #textContent>
        <h1
          class="lg:mb-8 mb-5 lg:text-6xl sm:text-3xl text-2xl font-semibold [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)]"
        >
          {{ testDescribeSection.title }}
        </h1>
        <p class="lg:mb-14 mb-8 lg:text-2xl md:text-xl text-sm">
          {{ testDescribeSection.subtitle }}
        </p>
      </template>
      <template #action>
        <BaseButton
          :size="breakpoints.isLg ? 'large' : breakpoints.isSm ? 'medium' : 'small'"
          class="lg:mb-28 md:mb-20 mb-14 rounded-xl"
          type="primary"
          text="Buy Now"
        />
      </template>
      <template #productContent>
        <VideoViewerButton
          v-if="!show"
          @click="playVideo"
          class="lg:mb-14 sm:flex md:static absolute right-0 top-0 z-10"
        />
        <LatestProductCard />
      </template>
    </LatestProductSectionLayout>
    <VideoViewerPlayer v-if="show" />
  </section>
</template>
