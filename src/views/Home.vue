<template>
  <div class="row justify-content-center mb-5">
    <div class="col-12 col-md-10 col-lg-6">
      <figure class="text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
      </figure>
      <div class="card">
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
          <b-card class="mt-3" header="Form data result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
        <div class="card-body">
          <h5 class="card-title">Información del pedido</h5>
          <pieces-list></pieces-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "@vue/reactivity";
import { nextTick } from "@vue/runtime-core";

import PiecesList from "@/components/PiecesList.vue";

export default {
  name: "Home",
  components: { PiecesList },
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

    return { form, showForm, validName, materialsOpts, onSubmit, onReset };
  },
};
</script>
