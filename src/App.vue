<script setup>
import { reactive } from 'vue';


import Cabecalho from "./components/Cabecalho.vue";
import Save from "./components/Save.vue";
import Interface_cpf from "./components/Interface_cpf.vue";
import Interface_cnpj from "./components/Interface_cnpj.vue";
import Materiais from "./components/Materiais.vue";

const estado = reactive({
  filtro: 'cpf',
  material: [] // O estado compartilhado
});
</script>

<template>
  <div class="container">
    <Cabecalho :filtro="estado.filtro" @update-filtro="estado.filtro = $event" />

    <template v-if="estado.filtro === 'cpf'">
      <Interface_cpf />
    </template>
    <template v-if="estado.filtro === 'cnpj'">
      <Interface_cnpj />
    </template>

    <Materiais v-model="estado.material" />
    <Save :materiais="estado.material" />
  </div>
</template>
