<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navlinksMock } from './__mocks__'
const route = useRoute()

const activePage = (path: string) => {
  return route.path === path
}
</script>
<template>
  <div class="md:flex justify-center items-center py-7 gap-20 bg-primary-1 text-white hidden">
    <nav v-for="{ id, title, to } in navlinksMock" :key="id">
      <router-link
        :to="to"
        class="hover:text-black transition-all duration-200"
        :class="{ 'text-black': activePage(to) }"
      >
        {{ title }}
      </router-link>
    </nav>
  </div>
</template>
