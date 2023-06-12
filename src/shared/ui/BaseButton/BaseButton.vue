<script setup lang="ts">
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
import { type Props } from './types'
import { ref } from 'vue'

const buttonId = ref(generateUniqueID('button'))
withDefaults(defineProps<Partial<Props>>(), {
  variant: 'primary',
  to: '#'
})
defineEmits(['click'])
</script>
<template>
  <a
    v-if="link"
    :href="to"
    class="flex max-w-max items-center justify-center transition-colors duration-200"
    :class="[
      icon && text ? 'gap-4' : '',
      size === 'small' ? 'p-2 text-xs' : '',
      size === 'medium' ? 'px-8 py-4 text-base' : '',
      size === 'large' ? ' px-32 h-16 text-xl' : '',
      variant === 'primary' ? 'group btn-primary' : '',
      variant === 'secondary' ? 'group btn-secondary' : '',
      variant === 'custom' ? '' : ''
    ]"
  >
    <component
      :class="[
        variant === 'primary' ? ' text-white group-hover:text-primary-1' : '',
        variant === 'secondary' ? ' text-primary-1 group-hover:text-white' : '',
        size === 'small' ? ' w-4 h-4' : ''
      ]"
      :is="icon"
    ></component>
    <span
      class="whitespace-nowrap"
      :class="[variant === 'primary' ? 'group-hover:text-slate-950' : '']"
      >{{ text }}</span
    >
    <p v-if="discount">{{ discount }}</p>
  </a>
  <button
    v-else
    :id="buttonId"
    :disabled="disabled"
    @click="method"
    class="flex items-center justify-center transition-colors duration-200"
    :class="[
      icon && text ? 'gap-4' : '',
      size === 'small' ? 'p-2 text-xs' : '',
      size === 'medium' ? 'px-8 py-4 text-base' : '',
      size === 'large' ? ' px-32 h-16 text-xl' : '',
      variant === 'primary' ? 'group btn-primary' : '',
      variant === 'secondary' ? 'group btn-secondary' : '',
      variant === 'custom' ? '' : ''
    ]"
  >
    <component
      :class="[
        variant === 'primary' ? ' text-white group-hover:text-primary-1' : '',
        variant === 'secondary' ? ' text-primary-1 group-hover:text-white' : '',
        size === 'small' ? ' w-4 h-4' : ''
      ]"
      :is="icon"
    ></component>
    <span
      class="whitespace-nowrap"
      :class="[variant === 'primary' ? 'group-hover:text-slate-950' : '']"
      >{{ text }}</span
    >
    <p v-if="discount">{{ discount }}</p>
  </button>
</template>
