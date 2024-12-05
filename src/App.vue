<script setup>
import { reactive } from 'vue';
import Cabecalho from "./components/Cabecalho.vue";
import Save from "./components/Save.vue";
import Interface_cpf from "./components/Interface_cpf.vue";
import Interface_cnpj from "./components/Interface_cnpj.vue";
import Materiais from "./components/Materiais.vue";

// Estado reativo com todos os dados
const estado = reactive({
  filtro: 'cpf',
  material: [],
  maoDeObra: 0,
  clienteInfo: {
    cpf: '',
    nomeCliente: '',
    endereco: '',
    cep: '',
    cnpj: '',
    razaoSocial: ''
  }
});
</script>

<template>
  <div class="container">
    <Cabecalho :filtro="estado.filtro" @update-filtro="estado.filtro = $event" />

    <template v-if="estado.filtro === 'cpf'">
      <Interface_cpf v-model="estado.clienteInfo" />
    </template>

    <template v-if="estado.filtro === 'cnpj'">
      <Interface_cnpj v-model="estado.clienteInfo" />
    </template>

    <Materiais v-model="estado.material" @update:maoDeObra="estado.maoDeObra = $event" />

    <Save :materiais="estado.material" :maoDeObra="estado.maoDeObra" :clienteInfo="estado.clienteInfo" />
  </div>
</template>
