import { describe, test, expect } from 'vitest'
import BaseContainer from './BaseContainer.vue'

describe('base component test', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('./BaseContainer.vue')
    expect(cmp).toBeDefined()
  })

  test('mount component', async () => {
    expect(BaseContainer).toBeTruthy()
  })
})
