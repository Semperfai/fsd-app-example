import { ref, computed } from 'vue'

export const useBreakpoints = () => {
  const viewportWidth = ref(window.innerWidth)

  window.addEventListener('resize', () => {
    viewportWidth.value = window.innerWidth
  })

  return computed(() => ({
    isXxs: viewportWidth.value < 499,
    isXs: viewportWidth.value < 640,
    isSm: viewportWidth.value >= 730,
    isMd: viewportWidth.value >= 850,
    isLg: viewportWidth.value >= 1024,
    isXl: viewportWidth.value >= 1280
  }))
}
