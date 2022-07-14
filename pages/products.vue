<template>
  <div class="mx-auto">
    <h1 class="font-bold mt-6 text-xl text-center">Mountains</h1>

    <div class="container mx-auto mt-8">
      <button
        class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-full mb-4"
        @click="showMountains"
      >
        Toggle Mountains
      </button>
      <LazyShopProductCard v-if="show" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  methods: {
    showMountains() {
      this.show = !this.show
    },
  },
}
</script>
