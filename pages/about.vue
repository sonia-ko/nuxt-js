<template>
  <div>
    <h1>About</h1>
    <p v-if="$nuxt.isOffline">Oops you are offline</p>
    <p v-if="$nuxt.isOnline">Yeah</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
