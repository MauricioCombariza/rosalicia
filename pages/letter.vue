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
        <img :src="bgf" alt="bgf" class="h-screen z-0 relative" />
        <div class="z-20 absolute">
          <div class="flex justify-center">
            <div class="absolute rotate-45 bg-yellow-100 h-8 w-24 z-40">.</div>
          </div>
          <div class="letter">
            <p>{{ saludo }}:</p>
            <p v-for="t in texto" :key="t.p">
              {{ t.texto }}
            </p>
            <p>Con cariño: {{ firma }}</p>
          </div>
          <div class="flex justify-center">
            <div class="absolute rotate-45 bg-yellow-100 h-8 w-24 z-40">.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { maxcarta, cartas } from '~/assets/text'
import { maxfondo, fondo } from '~/assets/image'
export default {
  data() {
    return {
      maxcarta,
      maxfondo,
      bg: fondo,
      iter: 0,
      iterFondo: 0,
      txt: cartas,
    }
  },
  computed: {
    texto() {
      return this.txt[this.iter].txt
    },
    firma() {
      return this.txt[this.iter].firma
    },
    saludo() {
      return this.txt[this.iter].saludo
    },
    bgf() {
      return this.bg[this.iterFondo].url
    },
  },
  methods: {
    add() {
      if (this.iter === this.maxcarta) {
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

<style scoped>
body {
  background: linear-gradient(#ccc, #fff);
  font: 14px sans-serif;
  padding: 20px;
}

.letter {
  background: #fff;
  box-shadow: 0 0 10px rgba(0 0 0 / 30%);
  margin: 26px auto 0;
  max-width: 300px;
  min-height: 300px;
  padding: 24px;
  position: relative;
  width: 80%;
}

.letter::before,
.letter::after {
  content: '';
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.letter::before {
  background: #fafafa;
  box-shadow: 0 0 8px rgba(0 0 0 / 20%);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}

.letter::after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0 0 0 / 20%);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}
</style>
