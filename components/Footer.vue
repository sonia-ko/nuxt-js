<template>
  <div class="container">
    <footer class="footer">
      <p class="text-gray-500">© Test nuxt website</p>
      <div class="images">
        <a target="_blank" href="https://facebook.com/">
          <img src="img/facebook-brands.svg" alt="" />
        </a>
        <a target="_blank" href="https://google.com/">
          <img src="img/google-brands.svg" alt="" />
        </a>
        <a target="_blank" href="https://twitter.com">
          <img src="img/twitter-brands.svg" alt="" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer p {
  width: 50%;
}
.footer .images {
  display: flex;
  justify-content: flex-end;
  margin: 2rem auto;
  width: 50%;
}
.footer .images img {
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
}

.footer .images img:hover {
  opacity: 0.5;
}
</style>
