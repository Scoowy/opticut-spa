<template>
  <div class="row my-1">
    <div class="col-3 pe-0">
      <b-form-input
        :id="countId"
        type="number"
        min="0"
        placeholder="0"
        required
      ></b-form-input>
    </div>
    <div class="col-1 text-center"></div>
    <div class="col-3 px-0">
      <b-input-group append="cm">
        <b-form-input
          :id="heigthId"
          type="number"
          min="0"
          step="1.0"
          placeholder="0"
          required
        ></b-form-input>
      </b-input-group>
    </div>
    <div class="col-1 text-center">x</div>
    <div class="col-3 ps-0">
      <b-input-group append="cm">
        <b-form-input
          :id="widthId"
          type="number"
          min="0"
          step="1.0"
          placeholder="0"
          required
        ></b-form-input>
      </b-input-group>
    </div>
    <div class="col-1 ps-0">
      <b-button @click="notifyDeletePiece" pill variant="outline-light">
        <b-icon variant="danger" icon="x-lg"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "Piece",
  props: {
    id: Number,
    count: Number,
    height: Number,
    width: Number,
  },
  setup(props, { emit }) {
    const countId = computed(() => `c-${props.id}`);
    const heigthId = computed(() => `h-${props.id}`);
    const widthId = computed(() => `w-${props.id}`);

    const notifyDeletePiece = () => {
      emit("onDeletePiece", props.id);
    };

    return { heigthId, widthId, countId, notifyDeletePiece };
  },
};
</script>

<style></style>
