<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navlinksMock } from '../../__mocks__/navlinksMock'
const route = useRoute()

const activePage = (path: string) => {
  return route.path === path
}
</script>
<template>
  <nav>
    <ul class="md:flex justify-center items-center py-7 gap-20 bg-primary-1 text-white hidden">
      <li v-for="{ id, title, to } in navlinksMock" :key="id">
        <router-link
          :to="to"
          class="hover:text-black transition-all duration-200"
          :class="{ 'text-black': activePage(to) }"
        >
          {{ title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
