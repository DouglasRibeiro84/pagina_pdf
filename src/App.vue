<script>
import Cabecalho from "./components/Cabecalho.vue";
import Interface from "./components/Interface.vue";

export default {
  name: 'App',
  components: {
    Interface,
    Cabecalho
  }
}
</script>

<template>
  <Cabecalho />
  <Interface />
</template>

<style scoped></style>
