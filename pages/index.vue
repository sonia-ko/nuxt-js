<template>
  <div class="container">
    <div>
      <NuxtLogo />
      <h1 class="title">My nuxt</h1>
      <NuxtLink to="/about">About </NuxtLink>
      <div class="links">
        <a class="button-green" href="https://nuxtjs.org/" target="_blank"
          >Documentation</a
        >
        <a class="button-green" href="https://github.com/" target="_blank"
          >Github</a
        >
        <NuxtLink class="bbutton-green" to="/products">Products</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin: 1rem auto;
  width: 18rem;
  color: #fff;
  background-color: #92d1c3;
  height: 5rem;
  font-size: 2rem;
}

a:hover {
  color: rgb(124, 120, 120);
  background-color: #bfdad4;
}
</style>
