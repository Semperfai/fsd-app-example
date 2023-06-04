import type { Component } from 'vue'
export interface Props {
  disabled: boolean
  label: string
  type: string
  placeholder: string
  method: (payload: MouseEvent) => void
  icon: Component
}
