import { describe, test, expect } from 'vitest'
import MainHeaderMenu from './MainHeaderMenu.vue'

describe('base component test', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('./MainHeaderMenu.vue')
    expect(cmp).toBeDefined()
  })

  test('mount component', async () => {
    expect(MainHeaderMenu).toBeTruthy()
  })
})
