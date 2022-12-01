<template>
  <div>
    <div class="bg-ros1 h-full">
      <div class="flex justify-center">
        <img :src="fondo" alt="Fondo" class="h-screen z-0 relative" />
        <div class="bg-white mt-10 z-20 absolute border-1 border-black">
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
      <footer class="inset-0 bg-white flex flex-row justify-end content-center">
        <NuxtLink to="/home">
          <font-awesome-icon
            :icon="['fa', 'child-dress']"
            class="icon alt text-3xl m-3"
          />
        </NuxtLink>
        <NuxtLink to="/joven">
          <font-awesome-icon
            :icon="['fa', 'tree']"
            class="icon alt text-3xl m-3"
          />
        </NuxtLink>

        <NuxtLink to="/actual">
          <font-awesome-icon
            :icon="['fa', 'sun']"
            class="icon alt text-3xl m-3"
          />
        </NuxtLink>

        <NuxtLink to="/texto">
          <font-awesome-icon
            :icon="['fa', 'envelope']"
            class="icon alt text-3xl m-3"
          />
        </NuxtLink>

        <NuxtLink to="/about">
          <font-awesome-icon
            :icon="['fa', 'image']"
            class="icon alt text-3xl m-3"
          />
        </NuxtLink>
      </footer>
    </div>
  </div>
</template>

<script>
import { actualRand, fondoRand } from '~/assets/image'
export default {
  data() {
    return {
      foto: actualRand,
      fondo: fondoRand,
    }
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
