<script setup lang="ts">
import VideoViewerMenuScrubber from '../VideoViewerScrubber/VideoViewerScrubber.vue'
import VideoViewerMenuItem from '../VideoViewerMenuItem/VideoViewerMenuItem.vue'
import VideoViewerMenu from '../VideoViewerMenu/VideoViewerMenu.vue'
import { IconPlay } from '@/shared'
import { IconPause } from '@/shared'
import { IconVolumeMute } from '@/shared'
import { IconSettings } from '@/shared'
import { IconVolumeUnmute } from '@/shared'
import { Spinner } from '@/shared'
import { computed, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
import { formatDuration } from '../../lib'
import { getProductById } from '@/entities/product'

const video = ref<HTMLVideoElement>()
const loop = ref(false)
const videoProductPresentation = ref()

const setVideoProductPresentation = async () => {
  try {
    const {
      data: { videoPresentationSrc }
    } = await getProductById({ productId: 1 })
    videoProductPresentation.value = videoPresentationSrc
  } catch (e) {
    console.log(e)
  }
}

await setVideoProductPresentation()
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
    :tabindex="0"
    autofocus
    @keydown.prevent.space="playing = !playing"
    @keydown.right="currentTime += 10"
    @keydown.left="currentTime -= 10"
  >
    <div
      class="p-5 rounded-md bg-gray-700 absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <video
        class="w-full m-auto"
        ref="video"
        autoplay
        crossorigin="anonymous"
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
        class="my-2"
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

      <div class="flex flex-row justify-between items-center gap-3">
        <button @click="playing = !playing">
          <IconPlay v-if="!playing" class="w-6 md:w-7 lg:w-9" />
          <IconPause class="w-6 md:w-7 lg:w-9" v-else />
        </button>
        <button @click="muted = !muted">
          <IconVolumeMute v-if="muted" class="w-6 md:w-7 lg:w-9" />
          <IconVolumeUnmute class="w-6 md:w-7 lg:w-9" v-else />
        </button>
        <VideoViewerMenuScrubber v-model="volume" :max="1" class="w-32 ml-2" />
        <div class="flex-col flex-1 text-sm ml-2 text-white hidden sm:flex">
          {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
        </div>

        <VideoViewerMenu class="mr-2">
          <template #default="{ open }">
            <button @click="open"><IconSettings class="w-6 md:w-7 lg:w-9" /></button>
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
  </div>
</template>
