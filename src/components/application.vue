<template>
  <div>
    <div class="wrapper">
      <Navbar v-if="signedIn" :topValue="topValue"></Navbar>
      <main class="main-container">
        <transition name="fade" mode="out-in">
          <router-view @emitTop="setTop"/>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from './layout/Navbar.vue';

export default {
  name: 'ApplicationRootComponent',
  components: { Navbar },
  data () {
    return {
      topValue: '0px'
    }
  },
  methods: {
    setTop (top) {
      this.topValue = top
    }
  }
};
</script>
<style>
  .main-container {
    z-index: 3;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.6s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>