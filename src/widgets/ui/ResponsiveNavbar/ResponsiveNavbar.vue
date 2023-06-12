<script setup lang="ts">
import { IconSearch } from '@/shared'
import { IconProfile } from '@/shared'
import { IconShoppingCart } from '@/shared'
import { ButtonClose } from './ui'
import { BaseButton } from '@/shared'
import { BaseInput } from '@/shared'
import { navlinksMock } from './_mocks_'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'
import { type Props } from './types'

defineProps<Partial<Props>>()
const breakpoints = useBreakpoints()
</script>
<template>
  <div
    class="fixed flex flex-col bg-white top-14 right-2 rounded-lg z-20 px-3 py-4 h-96 md:hidden"
    :class="{ 'min-w-[320px]': !breakpoints.isXxs }"
  >
    <ButtonClose class="self-end mb-3" :method="showMethod" />
    <div class="flex flex-col justify-start items-center gap-6">
      <nav v-for="{ id, title, to } in navlinksMock" :key="id">
        <router-link :to="to">
          {{ title }}
        </router-link>
      </nav>
      <BaseInput v-if="breakpoints.isXxs" :icon="IconSearch" class="rounded-xl" />
      <BaseButton
        variant="secondary"
        size="small"
        text="0 Items Added"
        class="rounded-full"
        :icon="IconShoppingCart"
      ></BaseButton>
      <BaseButton
        :link="true"
        to="#"
        size="small"
        :icon="IconProfile"
        variant="primary"
        class="rounded-full"
        text="Login or Sign Up"
      ></BaseButton>
    </div>
  </div>
</template>
