<template>
  <div class="mt-8 mx-auto error">
    <h1>There is an error</h1>
    <NuxtLink to="/"> Go back home</NuxtLink>
    <img class="mx-auto" src="img/404.gif" alt="" />
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-align: center;
  font-size: 3rem;
}
.error a {
  display: flex;
  text-align: center;
  width: 14rem;
  height: 4rem;
  color: #fff;
  background-color: #5ea898;
  margin: 2rem auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1.5rem;
}
</style>
