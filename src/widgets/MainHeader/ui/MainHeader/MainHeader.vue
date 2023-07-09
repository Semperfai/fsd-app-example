<script setup lang="ts">
import { BaseContainer } from '@/shared/ui'
import { BurgerButton } from '@/shared/ui'
import { IconBrandLogo } from '@/shared/ui'
import { ResponsiveNavbar } from '@/widgets/ResponsiveNavbar'
import { HeaderMenu } from '../HeaderMenu'
import { ref, onMounted, watch } from 'vue'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints'

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
const breakpoints = useBreakpoints()
watch([open, breakpoints], ([open, breakpoints]) => {
  if (open && !breakpoints.isLg) {
    return (document.body.style.overflow = 'hidden')
  }

  document.body.style.overflow = 'auto'
})
</script>
<template>
  <BaseContainer>
    <div class="flex justify-between items-center lg:py-16 py-8">
      <router-link to="/">
        <IconBrandLogo class="lg:w-max w-28" />
      </router-link>
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
