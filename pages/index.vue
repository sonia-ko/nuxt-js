<template>
  <div class="container">
    <div class="mt-4">
      <!-- Dynamic images -->
      <h2>Welcome to the page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos qui
        veniam temporibus sequi deleniti voluptates nobis totam odit laudantium
        dolor dolorem fugiat error laboriosam, doloribus reiciendis minima
        earum, quaerat tenetur?
      </p>
      <div class="gallery">
        <figure v-for="(image, i) in images" :key="i">
          <img :src="require(`~/assets/imgs/gallery/${image}`)" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      images: [
        'mountains-1.jpg',
        'mountain-2.jpg',
        'mountain-3.png',
        'mountain-4.jpg',
        'mountain-5.jpg',
        'mountain-6.jpg',
      ],
    }
  },
}
</script>

<style scoped>
.gallery {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
}

h2 {
  font-size: 2rem;
  text-align: center;
}
p {
  font-size: 1.2rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.gallery figure {
  width: 100%;
  height: 300px;
}

.gallery figure img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 1550px) {
  a {
    width: 14rem;
    height: 5rem;
    font-size: 1.7rem;
  }
}
</style>
