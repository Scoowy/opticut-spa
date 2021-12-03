import { toRefs, reactive } from "@vue/reactivity";

const BACKEND_URL = "https://opticut-spa-backend.herokuapp.com";

export default function () {
  const data = reactive({
    planks: [],
  });

  const getPlank = (id) => {
    return data.planks.find((plank) => {
      return plank.id === id;
    });
  };

  const getPlanks = () => {
    fetch(`${BACKEND_URL}/products`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => (data.planks = result))
      .catch((err) => console.log(err.message));
  };

  return { ...toRefs(data), getPlank, getPlanks };
}
