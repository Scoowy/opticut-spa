<template>
  <h2 class="card-header">Lista de corte</h2>
  <b-overlay :show="isSending" rounded="sm" variant="light" opacity="0.85">
    <div class="card-body">
      <h5 class="card-title">Información del cliente</h5>
      <b-form v-if="showForm" @submit="onSubmit" @reset="onReset">
        <b-form-group label="Cliente:" label-for="clientName">
          <b-form-input
            id="clientName"
            v-model="form.client"
            type="text"
            placeholder="Jhon Doe"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          v-if="planks.length !== 0"
          label="Material:"
          label-for="material"
        >
          <b-form-select
            id="material"
            v-model="form.plank"
            :options="planks"
            value-field="name"
            text-field="name"
            required
          >
            <template #first>
              <b-form-select-option value="" disabled
                >-- Selecciona un material --
              </b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-button type="submit" variant="outline-primary">Enviar</b-button>
        <b-button type="reset" variant="outline-danger">Limpiar</b-button>
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
      <cut-list-piece
        v-for="(pieceRow, index) in pieces"
        :id="index"
        :key="index"
        v-model:height="pieceRow.height"
        v-model:width="pieceRow.width"
        v-model:count="pieceRow.count"
        @on-delete-piece="deletePiece"
      ></cut-list-piece>

      <b-button variant="outline-primary" @click="onAddNewPiece"
        >Añadir corte</b-button
      >

      <b-card no-body class="mt-3">
        <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
          <b-button v-b-toggle.info-data variant="outline-warning"
            >DEBUG: Form data result</b-button
          >
        </b-card-header>
        <b-collapse id="info-data">
          <b-card-body>
            <pre class="m-0">{{ form }}</pre>
            <pre class="m-0">{{ pieces }}</pre>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-overlay>
</template>

<script lang="ts">
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from 'vue';

import CutListPiece from '@/components/CutListPiece.vue';

import usePieces from '@/composables/usePieces';
import usePlanks from '@/composables/usePlanks';
import useScrollBottom from '@/composables/useScrollBottom';
import useOrders, { Order } from '@/composables/useOrders';

export default {
  name: 'CutList',
  components: { CutListPiece },
  setup() {
    const form = reactive<{ client: string; plank: string | null }>({
      client: '',
      plank: null,
    });

    const showForm = ref(true);
    const validName = ref(false);

    const { planks, getPlanks } = usePlanks();
    const { pieces, addPiece, deletePiece, deletePieces } = usePieces();
    const { scrollToBottom } = useScrollBottom();
    const { isSending, sendOrder } = useOrders();

    const onSubmit = (e: Event) => {
      e.preventDefault();

      const order: Order = {
        ...form,
        status: 'pending',
        pieces: [],
      };

      order.pieces = pieces.value.map((piece, index) => {
        piece.code = index + 1;
        return piece;
      });

      // alert(JSON.stringify(order));

      console.log(JSON.stringify(order));

      sendOrder(order);
    };

    const onReset = (e: Event) => {
      e.preventDefault();
      form.client = '';
      form.plank = null;
      deletePieces();
    };

    const onAddNewPiece = () => {
      addPiece();
      scrollToBottom();
    };

    onMounted(() => {
      onAddNewPiece();
      getPlanks();
    });

    return {
      form,
      showForm,
      validName,
      planks,
      pieces,
      isSending,
      onSubmit,
      onReset,
      onAddNewPiece,
      deletePiece,
    };
  },
};
</script>

<style></style>
