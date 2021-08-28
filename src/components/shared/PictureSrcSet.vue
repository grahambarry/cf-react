<template>
  <img ref="root" v-webp="{image: require(`../../assets/${images[1].src}`), webp: require(`../../assets/${images[0].src}`)}" class="image">
</template>

<script>
  export default {
    name: "PictureSrcSet",
    props: {
      images: {
        type: Array,
        required: true,
      }
    }
  }
  
</script>
<style lang="scss">
  @import 'app/assets/stylesheets/design_vars';
  .image {
    position: absolute;
    picture {
      display: block;
    }
    img {
      display: block;
    }
  }
  @media screen and (max-width: $breakpoint-small) {
    .image {
      width: 100vw !important;
      right: unset !important;
    }
  }
</style>