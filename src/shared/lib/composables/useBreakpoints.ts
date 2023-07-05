import { ref, computed } from 'vue'
import { BREAKPOINTS } from '@/shared/constants/Breackpoints'

export const useBreakpoints = () => {
  const viewportWidth = ref(window.innerWidth)

  window.addEventListener('resize', () => {
    viewportWidth.value = window.innerWidth
  })

  return computed(() => ({
    isXxs: viewportWidth.value < BREAKPOINTS.XXS,
    isXs: viewportWidth.value < BREAKPOINTS.XS,
    isSm: viewportWidth.value >= BREAKPOINTS.SM,
    isMd: viewportWidth.value >= BREAKPOINTS.MD,
    isLg: viewportWidth.value >= BREAKPOINTS.LG,
    isXl: viewportWidth.value >= BREAKPOINTS.XL
  }))
}
