<script setup>
const props = defineProps({
    filtro: String
});
const emit = defineEmits(['update-filtro']);
function handleChange(event) {
    emit('update-filtro', event.target.value);
}
</script>

<template>
    <div class="container">
        <header class="mt-3 bg-light text-white rounded p-3 mb-3">
            <div class="row d-flex align-items-center">
                <div class="col-md-8">
                    <img src="../../public/images/header_coty.png" class="ms-5" alt="logo da pagina">
                </div>
                <div class="col-md-3 mt-md-0 mt-3">
                    <select :value="filtro" @change="handleChange" class="form-select form-select-sm">
                        <option value="cpf">CPF</option>
                        <option value="cnpj">CNPJ</option>
                    </select>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped>
img{
    width: 7em;
    height: 5em;
}
</style>
