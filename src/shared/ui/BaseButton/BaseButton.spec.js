import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('base component test', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('./BaseButton.vue')
    expect(cmp).toBeDefined()
  })

  test('mount component', async () => {
    expect(BaseButton).toBeTruthy()

    const wrapper = mount(BaseButton, {
      props: {
        text: 'Test Button'
      }
    })
    expect(wrapper.text()).toContain('Test Button')
  })
})
