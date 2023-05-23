<script setup lang="ts">
import { type Props } from './types'
withDefaults(defineProps<Partial<Props>>(), {
  type: 'primary',
  size: 'medium',
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
      type === 'primary'
        ? 'group bg-primary-1 border rounded-full text-white  hover:bg-primary-2 hover:border hover:border-primary-1'
        : '',
      icon && text ? 'gap-4  py-4  px-8' : 'p-2',
      type === 'secondary'
        ? 'group bg-primary-2 text-slate-950 border  border-primary-1 rounded-full  hover:bg-primary-1 hover:border hover:border-primary-1  hover:text-white'
        : ''
    ]"
  >
    <component
      :class="[
        type === 'primary' ? 'group-hover:text-primary-1' : '',
        type === 'secondary' ? ' text-primary-1 group-hover:text-white' : ''
      ]"
      :is="icon"
    ></component>
    <span :class="[type === 'primary' ? 'group-hover:text-slate-950' : '']">{{ text }}</span>
    <p v-if="discount">{{ discount }}</p>
  </a>
  <button
    v-else
    :disabled="disabled"
    @click="method"
    class="flex items-center justify-center transition-colors duration-200"
    :class="[
      type === 'primary'
        ? 'group bg-primary-1 border rounded-full text-white  hover:bg-primary-2 hover:border hover:border-primary-1'
        : '',
      icon && text ? 'gap-4  py-4  px-8' : 'p-2',
      type === 'secondary'
        ? 'group bg-primary-2 text-slate-950 border  border-primary-1 rounded-full  hover:bg-primary-1 hover:border hover:border-primary-1  hover:text-white'
        : ''
    ]"
  >
    <component
      :class="[
        type === 'primary' ? 'group-hover:text-primary-1' : '',
        type === 'secondary' ? ' text-primary-1 group-hover:text-white' : ''
      ]"
      :is="icon"
    ></component>
    <span :class="[type === 'primary' ? 'group-hover:text-slate-950' : '']">{{ text }}</span>
    <p v-if="discount">{{ discount }}</p>
  </button>
</template>

<style scoped></style>
