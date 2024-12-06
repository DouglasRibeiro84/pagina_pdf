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

    <transition name="fade" mode="out-in">
      <div :key="estado.filtro">
        <template v-if="estado.filtro === 'cpf'">
          <Interface_cpf v-model="estado.clienteInfo" />
        </template>

        <template v-if="estado.filtro === 'cnpj'">
          <Interface_cnpj v-model="estado.clienteInfo" />
        </template>
      </div>
    </transition>

    <Materiais v-model="estado.material" @update:maoDeObra="estado.maoDeObra = $event" />

    <Save :materiais="estado.material" :maoDeObra="estado.maoDeObra" :clienteInfo="estado.clienteInfo" />
  </div>
</template>

<style scoped>
/* Efeito de fade ao entrar e sair */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

/* Opacidade 0 na entrada e saída */
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores do Vue */ {
  opacity: 0;
}
</style>
