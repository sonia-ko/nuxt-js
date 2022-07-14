<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer> </Footer>
  </div>
</template>

<script>
export default {
  head: {
    title: 'nuxt-website-2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is a test website created with NuxtJS',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;400;600&display=swap',
      },
    ],
  },
}
</script>

<style>
html {
  font-family: 'Albert Sans', sans-serif;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
