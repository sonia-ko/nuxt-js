<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>Continent: {{ post.continent }}</p>
    <p>Description: {{ post.description }}</p>
    <img :src="post.image" alt="" />
  </div>
</template>

<script>
let post

export default {
  async asyncData({ params, $axios }) {
    post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    await console.log(post)
    return { post }
  },
}
</script>
