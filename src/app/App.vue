<script setup lang="ts">
import AOS from 'aos'
import { startApiMockWorker } from './apiMockWorker.ts'
import { Routing } from '@/pages/routing'
import { DefaultLayout } from './layouts'
import { onMounted } from 'vue'
onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100
  })
  startApiMockWorker()
})
</script>

<template>
  <DefaultLayout>
    <Routing />
  </DefaultLayout>
</template>
<style>
@import './index.scss';
</style>
