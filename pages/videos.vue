<template>
  <div>
    <header>
      <div @click="add">
        <font-awesome-icon
          :icon="['fa', 'chevron-right']"
          class="icon alt text-3xl m-3"
        />
      </div>
    </header>
    <div class="bg-ros1 h-full">
      <div class="flex justify-center">
        <video width="320" height="240" controls>
          <source :src="video" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { videos, maxvideo } from '~/assets/video'
export default {
  data() {
    return {
      base: videos,
      iter: 0,
      max: maxvideo,
    }
  },
  computed: {
    video() {
      return this.base[this.iter].src
    },
  },
  methods: {
    add() {
      if (this.iter === this.max) {
        this.iter = 0
      } else {
        this.iter = this.iter + 1
      }
    },
  },
}
</script>
