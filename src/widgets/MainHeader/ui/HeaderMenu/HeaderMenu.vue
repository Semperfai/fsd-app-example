<script setup lang="ts">
import { IconSearch } from '@/shared/ui'
import { IconProfile } from '@/shared/ui'
import { IconShoppingCart } from '@/shared/ui'
import { BaseInput } from '@/shared/ui'
import { BaseButton } from '@/shared/ui'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'
import { ref } from 'vue'
const breakpoints = useBreakpoints()
const text = ref('')
</script>
<template>
  <div class="flex items-center">
    <BaseInput v-if="!breakpoints.isXxs" :icon="IconSearch" v-model="text" class="rounded-xl" />
    <BaseButton
      v-if="breakpoints.isSm"
      variant="secondary"
      :size="breakpoints.isLg ? 'medium' : 'small'"
      text="0 Items Added"
      class="rounded-full ml-9"
      :icon="IconShoppingCart"
    ></BaseButton>
    <BaseButton
      :link="true"
      to="#"
      v-if="breakpoints.isSm"
      :size="breakpoints.isLg ? 'medium' : 'small'"
      :icon="IconProfile"
      variant="primary"
      class="rounded-full ml-6"
      text="Login or Sign Up"
    ></BaseButton>
  </div>
</template>
