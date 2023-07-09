<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup lang="ts">
import { BaseContainer } from '@/shared/ui'
</script>
<template>
  <BaseContainer>
    <div class="flex justify-center gap-3 flex-col md:flex-row">
      <div class="h-auto flex-[1_1_40%] lg:py-14 md:py-7">
        <slot name="textContent" />
        <slot name="action" />
      </div>
      <div class="h-auto flex flex-[1_1_40%]">
        <div class="relative flex w-full justify-between items-center">
          <div class="h-auto flex flex-[1_1_40%]">
            <div class="relative flex w-full justify-between items-center">
              <slot name="productContent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped></style>
