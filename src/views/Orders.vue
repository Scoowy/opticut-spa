<template>
  <div class="about">
    <b-card header="Lista de Ordenes">
      <b-card-body>
        <pre>{{ orders }}</pre>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import useOrders from "@/composables/useOrders";
import { onMounted } from "vue";

export default {
  name: "Orders",
  setup() {
    const { orders, getAllOrders } = useOrders();

    onMounted(() => {
      getAllOrders();
    });

    return { orders };
  },
};
</script>
