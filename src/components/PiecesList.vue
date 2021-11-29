<template>
  <div class="row">
    <div class="col-3 pe-0"><h6 class="text-center">Cant.</h6></div>
    <div class="col-1"></div>
    <div class="col-3 px-0"><h6 class="text-center">Alto</h6></div>
    <div class="col-1"></div>
    <div class="col-3 ps-0"><h6 class="text-center">Ancho</h6></div>
    <div class="col-1 ps-0">
      <h6 class="text-center">
        <b-icon variant="danger" icon="trash"></b-icon>
      </h6>
    </div>
  </div>
  <piece
    :key="index"
    v-for="(pieceRow, index) in pieces"
    :height="pieceRow.height"
    :width="pieceRow.width"
    :count="pieceRow.count"
    :id="index"
    @onDeletePiece="handlerDeletePiece"
  ></piece>

  <b-button variant="outline-primary" @click="onAddNewPiece"
    >Añadir corte</b-button
  >
</template>

<script>
import { ref } from "@vue/reactivity";
import Piece from "@/components/Piece.vue";

// import usePieces from "@/composables/usePieces";

export default {
  name: "PiecesList",
  components: { Piece },
  setup() {
    const piecesCount = ref(0);
    const pieces = ref([
      { count: 0, height: 0, width: 0 },
      { count: 0, height: 0, width: 0 },
    ]);

    const onAddNewPiece = () => {
      pieces.value.push({ count: 1, height: 0, width: 0 });

      const body = document.body;
      const html = document.documentElement;

      const heightView = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );

      console.log(heightView);
      window.scroll(0, heightView);
    };

    const handlerDeletePiece = (id) => {
      if (pieces.value.length != 1) {
        console.log(id);
        pieces.value.splice(id, 1);
      }
    };

    return { piecesCount, pieces, onAddNewPiece, handlerDeletePiece };
  },
};
</script>

<style></style>
