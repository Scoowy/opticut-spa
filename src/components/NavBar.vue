<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">OptiCut</a>
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Lista de corte</router-link>
        <router-link class="nav-link" to="/orders">Pedidos</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: [],
};
</script>

<style></style>
