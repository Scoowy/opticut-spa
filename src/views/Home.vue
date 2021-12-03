<template>
  <div class="row justify-content-center mb-5">
    <div class="col-12 col-md-10 col-lg-6">
      <figure class="text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
      </figure>
      <div class="card">
        <cut-list />
      </div>
    </div>
  </div>
</template>

<script>
import CutList from "@/components/CutList.vue";

export default {
  name: "Home",
  components: { CutList },
  setup() {},
};
</script>
