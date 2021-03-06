import { reactive, toRefs } from "@vue/reactivity";

export default function () {
  const data = reactive({
    piece: null,
    //region Description
    pieces: [],
    //endregion
  });

  const addPiece = () => {
    data.pieces.push({ count: 0, height: 0, width: 0 });
  };

  const deletePiece = (index) => {
    if (data.pieces.length !== 1) {
      data.pieces.splice(index, 1);
    }
  };

  const deletePieces = () => {
    data.pieces = [{ count: 0, height: 0, width: 0 }];
  };

  return { ...toRefs(data), addPiece, deletePiece, deletePieces };
}
