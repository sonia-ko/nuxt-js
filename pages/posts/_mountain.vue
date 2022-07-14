<template>
  <div class="container mx-auto">
    <SocialHead
      :title="mountain.title"
      :description="mountain.description"
      :image="mountain.image"
    >
    </SocialHead>
    <div class="relative py-16 bg-white overflow-hidden">
      <NuxtLink to="/products"> &#8592; Go back to mountains </NuxtLink>
    </div>
    <p
      class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
    >
      {{ mountain.continent }}
    </p>
    <h1
      class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl"
    >
      {{ mountain.title }}
    </h1>
    <div class="relative px-4 sm:px-6 lg:px-8 product-container">
      <div class="image-section">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <!-- <pre>{{ mountain }}</pre> -->
        </div>
        <figure>
          <img
            class="w-auto rounded-lg mx-auto"
            :src="mountain.image"
            :alt="mountain.title"
            width="1310"
            height="873"
          />
          <figcaption class="text-center">{{ mountain.title }}</figcaption>
        </figure>
      </div>
      <div class="text-section">
        <div class="mt-4 prose prose-lg text-gray-500 mx-auto description">
          <ul>
            <li>
              <span class="font-bold">Height:</span> {{ mountain.height }}
            </li>
            <li>
              <span class="font-bold">Country:</span>
              {{ mountain.countries.join(', ') }}
            </li>
          </ul>
          <p>
            {{ mountain.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const mountain = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.mountain}`
    )
    return { mountain }
  },
}
</script>

<style scoped>
svg {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.product-container {
  display: flex;
  font-size: 1.25rem;
  width: 100%;
}

.image-section {
  width: 50%;
}
.text-section {
  width: 50%;
}
</style>
