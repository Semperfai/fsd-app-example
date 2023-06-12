import { type ComputedRef } from 'vue'

export type Breakpoints = ComputedRef<{
  isXxs: boolean
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
}>
