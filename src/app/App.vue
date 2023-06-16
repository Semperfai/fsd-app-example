<script setup lang="ts">
import AOS from 'aos'
import { Routing } from '@/pages/routing'
import { DefaultLayout } from './layouts'
import { onMounted } from 'vue'
onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100
  })
})
</script>

<template>
  <DefaultLayout>
    <Routing />
  </DefaultLayout>
</template>
<script setup lang="ts"></script>
<style>
@import './index.scss';
</style>
