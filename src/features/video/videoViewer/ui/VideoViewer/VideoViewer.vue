<script setup lang="ts">
import {  ref } from 'vue'
import VideoViewerButton from '../VideoViewerButton/VideoViewerButton.vue'
import VideoViewerPlayer from '../VideoViewerPlayer/VideoViewerPlayer.vue'
const isShow = ref(false)

const playVideo = () => {
  isShow.value = !isShow.value
}

</script>
<template>
  <VideoViewerPlayer v-if="isShow" />
  <VideoViewerButton :method="playVideo"  v-else />
</template>
