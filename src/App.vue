<template>
  <nav-bar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
body {
  background-color: #1b1b1b;
}
</style>
