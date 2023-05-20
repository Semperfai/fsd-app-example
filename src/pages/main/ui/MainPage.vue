<script setup lang="ts">
import { BaseContainer } from '@/shared'
import { BaseButton } from '@/shared'
import { BaseFooter } from '@/widgets'
</script>
<template>
  <BaseContainer>
    <h1 class="text-3xl font-bold underline">MAIN PAGE!</h1>
    <label class="block">
      <span
        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
      >
        Email
      </span>
      <input
        type="email"
        name="email"
        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="you@example.com"
      />
      <div
        class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div>
          <span
            class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
          >
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <!-- ... -->
            </svg>
          </span>
        </div>
        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It
          even works in outer space.
        </p>
      </div>
    </label>
    <BaseButton class="dark:md:hover:bg-fuchsia-600 ...">Save changes</BaseButton>
    <BaseFooter />
  </BaseContainer>
</template>

<style scoped></style>
