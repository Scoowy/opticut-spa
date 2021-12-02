<template>
  <div class="row my-1">
    <div class="col-3 pe-0">
      <b-form-input
        :id="countId"
        type="number"
        min="0"
        placeholder="0"
        required
        @input="changeCount"
      ></b-form-input>
    </div>
    <div class="col-1 text-center"></div>
    <div class="col-3 px-0">
      <b-input-group append="cm">
        <b-form-input
          :id="heightId"
          type="number"
          min="0"
          step="1.0"
          placeholder="0"
          required
          @input="changeHeight"
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
          @input="changeWidth"
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
  emits: ["update:height", "update:width", "update:count"],
  setup(props, { emit }) {
    const countId = computed(() => `c-${props.id}`);
    const heightId = computed(() => `h-${props.id}`);
    const widthId = computed(() => `w-${props.id}`);

    const notifyDeletePiece = () => {
      emit("onDeletePiece", props.id);
    };

    const changeCount = (newCount) => {
      emit("update:count", parseInt(newCount));
    };

    const changeHeight = (newHeight) => {
      emit("update:height", parseFloat(newHeight));
    };

    const changeWidth = (newWidth) => {
      emit("update:width", parseFloat(newWidth));
    };

    return {
      heightId,
      widthId,
      countId,
      notifyDeletePiece,
      changeCount,
      changeHeight,
      changeWidth,
    };
  },
};
</script>

<style></style>
