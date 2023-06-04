<script setup lang="ts">
import { BaseButton } from '@/shared'
import { BaseContainer } from '@/shared'
import { BaseInput } from '@/shared'
import { BurgerButton } from '@/shared'
import { IconBrandLogo } from '@/shared'
import { IconSearch } from '@/shared'
import { IconProfile } from '@/shared'
import { IconShoppingCart } from '@/shared'
import { useBreakpoints } from '@/widgets/lib/composables/useBreakpoints'
import { ref } from 'vue'
const breakpoints = useBreakpoints()
const open = ref(false)
const showBurgerMenu = () => {
  open.value = !open.value
}
const text = ref('')
</script>
<template>
  <BaseContainer>
    <div class="flex justify-between items-center py-16">
      <a href="/">
        <IconBrandLogo :class="[breakpoints.isLg ? '' : ' w-28']" />
      </a>
      <div class="flex items-center ml-6 sm:ml-5">
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
      <BurgerButton @click="showBurgerMenu" :open="open" class="ml-8" v-if="!breakpoints.isSm" />
    </div>
  </BaseContainer>
</template>

<style scoped></style>
