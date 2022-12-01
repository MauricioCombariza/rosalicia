<template>
  <div class="bg-ros1 h-screen">
    <body>
      <h1 class="text-2xl text-ros4 flex justify-center mb-10">
        La Tata 70 años
      </h1>
      <section class="container flex justify-center content-center bg-ros3">
        <img class="w-3/5 rounded-xl m-10" :src="rand" alt="Foto" />
      </section>
      <section class="container justify-center content-center bg-ros2">
        <div>
          <span
            ><h3>Escrito por: {{ name }}</h3></span
          >
        </div>
        <div>
          <p>{{ texto }}</p>
        </div>
      </section>
    </body>
  </div>
</template>

<script>
import { nina } from '~/assets/image'
import { textHermano, nameHermano } from '~/assets/text'
export default {
  data() {
    return {
      min: 1,
      max: nina.length - 1,
      nina,
      texto: textHermano,
      name: nameHermano,
    }
  },
  computed: {
    randomIntFromInterval() {
      // min and max included
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
    },
    rand() {
      return this.nina[this.randomIntFromInterval].url
    },
  },
}
</script>

<style>
body {
  font-family: 'Square Peg', cursive;
}

/* h1 {
  font-size: 4rem;
} */
</style>
