<template>
  <h2 class="card-header">Lista de corte</h2>
  <div class="card-body">
    <h5 class="card-title">Información del cliente</h5>
    <b-form @submit="onSubmit" @reset="onReset" v-if="showForm">
      <b-form-group label="Cliente:" label-for="clientName">
        <b-form-input
          id="clientName"
          v-model="form.clientName"
          type="text"
          placeholder="Jhon Doe"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Material:" label-for="material">
        <b-form-select
          id="material"
          v-model="form.material"
          :options="materialsOpts"
          required
        >
          <template #first>
            <b-form-select-option value="" disabled
              >-- Selecciona un material --
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-button type="submit" variant="outline-primary">Submit</b-button>
      <b-button type="reset" variant="outline-danger">Reset</b-button>
    </b-form>
  </div>

  <div class="card-body">
    <h5 class="card-title">Información del pedido</h5>
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
      v-model:height="pieceRow.height"
      v-model:width="pieceRow.width"
      v-model:count="pieceRow.count"
      :id="index"
      @onDeletePiece="deletePiece"
    ></piece>

    <b-button variant="outline-primary" @click="onAddNewPiece"
      >Añadir corte</b-button
    >

    <b-card no-body class="mt-3">
      <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
        <b-button v-b-toggle.info-data variant="outline-warning">DEBUG: Form data result</b-button>
      </b-card-header>
      <b-collapse id="info-data">
        <b-card-body>
          <pre class="m-0">{{ form }}</pre>
          <pre class="m-0">{{ pieces }}</pre>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { nextTick } from "@vue/runtime-core";

import Piece from "@/components/Piece.vue";

import usePieces from "@/composables/usePieces";
import useScrollBottom from "@/composables/useScrollBottom";
import { onMounted } from "vue";

export default {
  name: "CutList",
  components: { Piece },
  setup() {
    const form = reactive({
      clientName: "",
      material: null,
    });

    const showForm = ref(true);
    const validName = ref(false);
    const materialsOpts = ref([
      {
        text: "Blanco Soft",
        value: {
          material: "Blanco Soft",
          height: 128.5,
          width: 244,
          density: 1.5,
        },
      },
      {
        text: "Negro Soft",
        value: {
          material: "Negro Soft",
          height: 128.5,
          width: 244,
          density: 1.5,
        },
      },
      {
        text: "Wengue",
        value: {
          material: "Wengue Soft",
          height: 128.5,
          width: 244,
          density: 1.5,
        },
      },
    ]);

    const { pieces, addPiece, deletePiece } = usePieces();
    const { scrollToBottom } = useScrollBottom();

    const onSubmit = (e) => {
      e.preventDefault();
      alert(JSON.stringify(form));
      showForm.value = false;
      nextTick(() => {
        showForm.value = true;
      });
    };

    const onReset = (e) => {
      e.preventDefault();
      form.clientName = "";
    };

    const onAddNewPiece = () => {
      addPiece();
      scrollToBottom();
    };

    onMounted(() => {
      onAddNewPiece();
    });

    return {
      form,
      showForm,
      validName,
      materialsOpts,
      pieces,
      onSubmit,
      onReset,
      onAddNewPiece,
      deletePiece,
    };
  },
};
</script>

<style></style>
