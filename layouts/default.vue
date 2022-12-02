<template>
  <div>
    <Nuxt />
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

      <NuxtLink to="/letter">
        <font-awesome-icon
          :icon="['fa', 'envelope']"
          class="icon alt text-3xl m-3"
        />
      </NuxtLink>
      <div @click="refresh">
        <font-awesome-icon
          :icon="['fa', 'chevron-right']"
          class="icon alt text-3xl m-3"
        />
      </div>

      <NuxtLink to="/about"> </NuxtLink>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    refresh() {
      window.location.reload(true)
    },
  },
}
</script>

<style>
body {
  font-family: 'Square Peg', cursive;
}
</style>
