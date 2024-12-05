<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['update:modelValue']);

const updateField = (field, value) => {
    emit('update:modelValue', { ...props.modelValue, [field]: value });
};
</script>

<template>
    <div class="container">
        <div class="row p-4">
            <!-- CNPJ -->
            <div class="col-md-6 mt-md-0 mt-3">
                <input v-model="props.modelValue.cnpj" type="text" class="form-control" placeholder="CNPJ" />
            </div>

            <!-- Nome do cliente -->
            <div class="col-md-6 mt-md-0 mt-3">
                <input v-model="props.modelValue.nomeCliente" type="text" class="form-control"
                    placeholder="Nome do cliente" />
            </div>

            <!-- Razão social -->
            <div class="col-md-12 mt-md-3 mt-3">
                <input v-model="props.modelValue.razaoSocial" type="text" class="form-control"
                    placeholder="Razão social" />
            </div>

            <!-- Endereço -->
            <div class="col-md-8 mt-md-3 mt-3">
                <input v-model="props.modelValue.endereco" type="text" class="form-control" placeholder="Endereço" />
            </div>

            <!-- Cep -->
            <div class="col-md-4 mt-md-3 mt-3">
                <input v-model="props.modelValue.cep" type="text" class="form-control" placeholder="Cep" />
            </div>
        </div>
    </div>
</template>
