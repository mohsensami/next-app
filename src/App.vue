<template>
  <div>
    <Header />

    <router-view style="min-height: 650px"></router-view>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/sections/Header.vue";
import Footer from "./components/sections/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>
