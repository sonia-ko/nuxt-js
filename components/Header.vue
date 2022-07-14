<template>
  <header class="container">
    <div class="mt-4">
      <!-- <NuxtLogo />
      <h1 class="title">My nuxt</h1> -->
      <figure class="mt-4">
        <img
          src="img/mountain-banner.jpg"
          alt="Beautiful image"
          class="rounded-lg mx-auto p-2 banner"
        />
      </figure>

      <div class="links my-12">
        <NuxtLink class="bbutton-green" to="/">Home</NuxtLink>

        <NuxtLink class="bbutton-green" to="/products">Mountains</NuxtLink>

        <NuxtLink to="/about">About </NuxtLink>

        <a class="button-green" href="https://nuxtjs.org/" target="_blank"
          >Documentation</a
        >
        <a class="button-green" href="https://github.com/" target="_blank"
          >Github</a
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin: 1rem 0;
  width: 18rem;
  color: #fff;
  background-color: #5ea898;
  height: 5rem;
  font-size: 2rem;
}

a:hover {
  color: rgb(124, 120, 120);
  background-color: #bfdad4;
}

.links {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
}

figure {
  width: 100%;
}
.banner {
  width: 100%;
  margin: 0 auto;
  max-height: 12rem;
  object-fit: cover;
  border-radius: 5px;
  padding: 0;
  opacity: 0.9;
}

@media (max-width: 1550px) {
  a {
    width: 14rem;
    height: 5rem;
    font-size: 1.7rem;
  }
}
</style>
