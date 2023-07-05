<script setup lang="ts"></script>
<template>
  <div>
    <svg class="circle" viewBox="0 0 100 100">
      <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />
      <text>
        <textPath xlink:href="#circle"></textPath>
      </text>
    </svg>
  </div>
</template>
<style scoped>
.circle {
  display: block;
  overflow: visible;
  width: 100px;
  font-size: 28px;
  fill: red;
}

.circle path {
  fill: none;
}
</style>
