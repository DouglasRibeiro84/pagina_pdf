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
        <header class="mt-3 bg-secondary text-white rounded p-3 mb-3">
            <div class="row d-flex align-items-center">
                <div class="col-md-8">
                    <h1 class="text-center text-md-start ms-md-5">
                        Pessoal Fisica/Juridica
                    </h1>
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

<style scoped></style>
