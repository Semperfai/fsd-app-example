<script setup lang="ts">
import { navlinksMock } from './__mocks__'
</script>
<template>
  <div class="md:flex justify-center items-center py-7 gap-20 bg-primary-1 text-white hidden">
    <nav v-for="{ id, title, to } in navlinksMock" :key="id">
      <router-link :to="to">
        {{ title }}
      </router-link>
    </nav>
  </div>
</template>
