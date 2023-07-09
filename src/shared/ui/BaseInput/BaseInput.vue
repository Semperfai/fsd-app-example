<script setup lang="ts">
import { BaseButton } from '@/shared/ui'
import { ref } from 'vue'
import { type Props } from './types'
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
const inputId = ref(generateUniqueID('input'))
const modelValue = defineModel()
withDefaults(defineProps<Partial<Props>>(), {
  disabled: false,
  placeholder: 'Search Items',
  type: 'text'
})

defineEmits(['update:model-value'])
</script>
<template>
  <label :for="inputId" class="relative">
    {{ label }}
    <input
      v-bind="$attrs"
      :id="inputId"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="[icon ? 'pr-24' : 'pr-10']"
      class="max-w-xs w-full lg:h-16 lg:pl-9 md:text-base md:h-12 md:py-3 md:pl-5 pl-2 py-1 text-sm placeholder:text-base-inp-ph placeholder:opacity-50 focus:outline-none focus:ring focus:ring-primary-1 shadow-[0_4px_4px_0_#00000040]"
      :type="type"
      v-model="modelValue"
    />
    <BaseButton
      v-if="icon"
      :method="method"
      variant="primary"
      :icon="icon"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 rounded w-5 h-5 md:w-9 md:h-9"
    />
  </label>
</template>
