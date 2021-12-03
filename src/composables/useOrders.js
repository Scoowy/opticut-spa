import { reactive, toRefs } from "@vue/reactivity";

const BACKEND_URL = "https://opticut-spa-backend.herokuapp.com";

export default function () {
  const data = reactive({
    isSending: false,
    orders: [],
  });

  const sendOrder = (order) => {
    data.isSending = true;
    fetch(`${BACKEND_URL}/orders/new-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        data.isSending = false;
        alert("Pedido realizado con éxito");
      })
      .catch((e) => {
        alert(`Error al realizar el pedido: ${e.message}`);
      });
  };

  const getAllOrders = () => {
    fetch(`${BACKEND_URL}/orders`)
      .then((res) => res.json())
      .then((response) => (data.orders = response))
      .catch((e) => console.log(e.message));
  };

  return { ...toRefs(data), sendOrder, getAllOrders };
}
