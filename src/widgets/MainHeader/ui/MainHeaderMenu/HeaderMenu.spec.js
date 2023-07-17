import { describe, test, expect } from 'vitest'
import HeaderMenu from './HeaderMenu.vue'

describe('base component test', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('./HeaderMenu.vue')
    expect(cmp).toBeDefined()
  })

  test('mount component', async () => {
    expect(HeaderMenu).toBeTruthy()
  })
})
