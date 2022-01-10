import { toRefs, reactive } from '@vue/reactivity';

export interface Plank {
  id: number;
  name: string;
  active: boolean;
  dimensions: {
    height: number;
    width: number;
    density: number;
  };
}

const BACKEND_URL = 'https://opticut-spa-backend.herokuapp.com';

export default function () {
  const data = reactive<{ planks: Plank[] }>({
    planks: [],
  });

  const getPlank = (id: number) => {
    return data.planks.find((plank: Plank) => {
      return plank.id === id;
    });
  };

  const getPlanks = () => {
    fetch(`${BACKEND_URL}/products`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result: Plank[]) => (data.planks = result))
      .catch((err: Error) => console.log(err.message));
  };

  return { ...toRefs(data), getPlank, getPlanks };
}
