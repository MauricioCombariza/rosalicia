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
        <img :src="fondo" alt="Fondo" class="h-screen z-0 relative" />
        <div class="bg-white mt-40 z-20 absolute border-1 border-black">
          <div class="flex justify-center">
            <div class="absolute rotate-45 bg-yellow-100 h-10 w-24 z-40">.</div>
          </div>
          <img
            class="h-56 lg:h-96 content-center mt-8 mr-5 ml-5 mb-14 border-1 border-black"
            :src="foto"
            alt="Foto"
          />
          <div class="flex justify-center">
            <div class="absolute rotate-45 bg-yellow-100 h-10 w-24 z-40">.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { maxfondo, fondo, nina, maxnina } from '~/assets/image'
export default {
  data() {
    return {
      bg: fondo,
      base: nina,
      maxfondo,
      iter: 0,
      iterFondo: 0,
      max: maxnina,
    }
  },
  computed: {
    foto() {
      return this.base[this.iter].url
    },
    fondo() {
      return this.bg[this.iterFondo].url
    },
  },
  methods: {
    add() {
      if (this.iter === this.max) {
        this.iter = 0
      } else {
        this.iter = this.iter + 1
      }

      if (this.iterFondo === this.maxfondo) {
        this.iterFondo = 0
      } else {
        this.iterFondo = this.iterFondo + 1
      }
    },
  },
}
</script>
