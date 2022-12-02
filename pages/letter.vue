<template>
  <div>
    <div class="bg-ros1 h-full">
      <div class="flex justify-center">
        <img :src="fondo" alt="Fondo" class="h-screen z-0 relative" />
        <div class="z-20 absolute">
          <div class="flex justify-center">
            <div class="absolute rotate-45 bg-yellow-100 h-10 w-24 z-40">.</div>
          </div>
          <div class="letter">
            <p>{{ saludo }}:</p>
            <p v-for="t in texto" :key="t.p">
              {{ t.texto }}
            </p>
            <p>Con cariño: {{ firma }}</p>
          </div>
          <div class="flex justify-center">
            <div class="absolute rotate-45 bg-yellow-100 h-10 w-24 z-40">.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { textcarta, firmacarta, maxcarta, saludocarta } from '~/assets/text'
import { fondoRand } from '~/assets/image'
export default {
  data() {
    return {
      value: 0,
      texto: textcarta,
      firma: firmacarta,
      saludo: saludocarta,
      fondo: fondoRand,
      max: maxcarta,
    }
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
  max-width: 350px;
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
