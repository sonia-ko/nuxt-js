<template>
  <div class="container mx-auto">
    <h1 class="font-bold mt-6 text-xl text-center">Mountains</h1>
    <NuxtLink class="text-left text-grey-600 hover:underline" to="/">
      Home
    </NuxtLink>

    <div class="container mx-auto mt-8">
      <button
        class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-full mb-4"
        @click="showMountains"
      >
        Toggle Mountains
      </button>
      <LazyProductCard v-if="show" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showMountains() {
      this.show = !this.show
    },
  },
}
</script>
