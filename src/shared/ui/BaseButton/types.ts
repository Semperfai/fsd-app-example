import type { Component } from 'vue'
export interface Props {
  variant: 'primary' | 'secondary' | 'custom'
  size: 'small' | 'medium' | 'large'
  disabled: boolean
  text: string
  to: string
  link: boolean
  method: (payload: MouseEvent) => void
  discount: string
  icon: Component
}
