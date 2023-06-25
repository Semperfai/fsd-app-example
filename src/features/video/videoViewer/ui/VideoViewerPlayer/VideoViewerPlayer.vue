<script setup lang="ts">
import VideoViewerMenuScrubber from '../VideoViewerScrubber/VideoViewerScrubber.vue'
import VideoViewerMenuItem from '../VideoViewerMenuItem/VideoViewerMenuItem.vue'
import VideoViewerMenu from '../VideoViewerMenu/VideoViewerMenu.vue'
import { Spinner } from '@/shared'
import { computed, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
import { formatDuration } from '../../lib'
import { getProductById } from '@/entities/product'

const video = ref<HTMLVideoElement>()
const loop = ref(false)
const poster = ref<string>('')
const videoProductPresentation = ref()

const response = await getProductById({ productId: 1 })
const { videoPresentationSrc, imgUrl } = response.data
videoProductPresentation.value = videoPresentationSrc

if (imgUrl && imgUrl.length > 0) {
  poster.value = imgUrl[0]
}

const controls = useMediaControls(video, videoProductPresentation.value)

const {
  playing,
  buffered,
  currentTime,
  duration,
  tracks,
  waiting,
  selectedTrack,
  volume,
  muted,
  enableTrack,
  disableTrack
} = controls
const endBuffer = computed(() =>
  buffered.value.length > 0 ? buffered.value[buffered.value.length - 1][1] : 0
)
</script>
<template>
  <div
    class="fixed grid justify-center content-center inset-0 bg-black opacity-75"
    :tabindex="0"
    autofocus
    @keydown.prevent.space="playing = !playing"
    @keydown.right="currentTime += 10"
    @keydown.left="currentTime -= 10"
  ></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <video
      class="w-full m-auto"
      ref="video"
      autoplay
      crossorigin="anonymous"
      :poster="poster"
      :loop="loop"
      @click="playing = !playing"
    />
    <div
      v-if="waiting"
      class="absolute inset-0 grid place-items-center pointer-events-none bg-black bg-opacity-20"
    >
      <Spinner />
    </div>
    <VideoViewerMenuScrubber
      v-model="currentTime"
      :max="duration"
      :secondary="endBuffer"
      class="mt-2"
    >
      <template #default="{ position, pendingValue }">
        <div
          class="absolute transform -translate-x-1/2 bg-black rounded px-2 bottom-0 mb-4 py-1 text-xs text-white"
          :style="{ left: position }"
        >
          {{ formatDuration(pendingValue) }}
        </div>
      </template>
    </VideoViewerMenuScrubber>

    <div class="flex flex-row items-center">
      <button @click="playing = !playing">
        <i v-if="!playing" inline-block align-middle>▶️</i>
        <i v-else inline-block align-middle>⏸️</i>
      </button>
      <button @click="muted = !muted">
        <i v-if="muted" inline-block align-middle>Volume mute</i>
        <i v-else inline-block align-middle>Volume up</i>
      </button>
      <VideoViewerMenuScrubber v-model="volume" :max="1" class="w-32 ml-2" />
      <div class="flex flex-col flex-1 text-sm ml-2 text-white">
        {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
      </div>

      <VideoViewerMenu class="mr-2">
        <template #default="{ open }">
          <button @click="open">Open</button>
        </template>
        <template #menu="{ close }">
          <div class="absolute bottom-0 right-0 bg-black rounded py-2 shadow">
            <VideoViewerMenuItem
              @keydown.stop.prevent.enter.space="disableTrack()"
              @click="
                () => {
                  disableTrack()
                  close()
                }
              "
            >
              <span class="flex-1">Off</span>
              <i inline-block align-middle :class="{ 'opacity-0': selectedTrack !== -1 }">✔️</i>
            </VideoViewerMenuItem>
            <VideoViewerMenuItem
              v-for="track in tracks"
              :key="track.id"
              @keydown.stop.prevent.enter.space="enableTrack(track)"
              @click="
                () => {
                  enableTrack(track)
                  close()
                }
              "
            >
              <span class="flex-1">{{ track.label }}</span>
              <i inline-block align-middle :class="{ 'opacity-0': track.mode !== 'showing' }"
                >✔️</i
              >
            </VideoViewerMenuItem>
          </div>
        </template>
      </VideoViewerMenu>
    </div>
  </div>
</template>
