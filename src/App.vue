<template>
  <nav-bar />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style></style>
