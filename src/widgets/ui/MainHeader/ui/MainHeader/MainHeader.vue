<script setup lang="ts">
import { BaseContainer } from '@/shared'
import { BurgerButton } from '@/shared'
import { IconBrandLogo } from '@/shared'
import { ResponsiveNavbar } from '@/widgets'
import { HeaderMenu } from '../HeaderMenu'
import { ref, onMounted } from 'vue'

const respNavbar = ref<any>(null)
const burgerBtn = ref<any>(null)
const open = ref<boolean>(false)

const showBurgerMenu = (): void => {
  open.value = !open.value
}

onMounted(() => {
  const handleOutsideClick = (event: Event): void => {
    if (!respNavbar.value || !burgerBtn.value) return
    const includeBurgerBtn: boolean = event
      .composedPath()
      .includes(burgerBtn.value.$el as HTMLElement)
    const includeRespNavbar: boolean = event
      .composedPath()
      .includes(respNavbar.value.$el as HTMLElement)
    if (open.value && !includeRespNavbar && !includeBurgerBtn) {
      open.value = false
    }
  }
  document.addEventListener('click', handleOutsideClick)
  return (): void => {
    document.removeEventListener('click', handleOutsideClick)
  }
})
</script>
<template>
  <BaseContainer>
    <div class="flex justify-between items-center py-16">
      <a href="/">
        <IconBrandLogo class="lg:w-max w-28" />
      </a>
      <HeaderMenu class="ml-6 sm:ml-5" />
      <BurgerButton ref="burgerBtn" @click="showBurgerMenu" :open="open" class="ml-8 md:hidden" />
    </div>
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <ResponsiveNavbar
        ref="respNavbar"
        :show-method="showBurgerMenu"
        v-if="open"
      ></ResponsiveNavbar>
    </Transition>
    <div v-if="open" class="fixed z-10 inset-0 bg-black opacity-50"></div>
  </BaseContainer>
</template>
