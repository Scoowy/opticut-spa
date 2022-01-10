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
      <b-button pill variant="outline-light" @click="notifyDeletePiece">
        <b-icon variant="danger" icon="x-lg"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
export default {
  name: 'CutListPiece',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:height', 'update:width', 'update:count', 'on-delete-piece'],
  setup(props, { emit }) {
    const countId = computed(() => `c-${props.id}`);
    const heightId = computed(() => `h-${props.id}`);
    const widthId = computed(() => `w-${props.id}`);

    const notifyDeletePiece = () => {
      emit('on-delete-piece', props.id);
    };

    const changeCount = (newCount: string) => {
      emit('update:count', parseInt(newCount));
    };

    const changeHeight = (newHeight: string) => {
      emit('update:height', parseFloat(newHeight));
    };

    const changeWidth = (newWidth: string) => {
      emit('update:width', parseFloat(newWidth));
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
