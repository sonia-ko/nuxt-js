<template>
  <div>
    <button
      class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-full mb-4"
      @click="$fetch"
    >
      Refresh
    </button>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div
      v-else
      class="md:flex mb-4 mb-4 text-left"
      v-for="mountain in mountains"
      :key="mountain.title"
    >
      <div class="md:flex-shrink-0">
        <img
          class="rounded-lg md:w-56"
          :src="mountain.image"
          :alt="mountain.title"
        />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          {{ mountain.continent }}
        </div>
        <NuxtLink
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          :to="mountain.slug"
        >
          {{ mountain.title }}
        </NuxtLink>
        <p class="mt-2 text-gray-600">
          {{ mountain.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then(
      (res) => res.json()
    )
  },
  data() {
    return {
      mountains: [],
    }
  },
}
</script>

<style scoped>
img {
  height: 150px;
}
</style>
