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
            <!-- CPF -->
            <div class="col-md-6 mt-md-0 mt-3">
                <input v-model="props.modelValue.cpf" type="text" class="form-control" placeholder="CPF:" />
            </div>

            <!-- Nome do cliente -->
            <div class="col-md-6 mt-md-0 mt-3">
                <input v-model="props.modelValue.nomeCliente" type="text" class="form-control"
                    placeholder="Nome do cliente:" />
            </div>

            <!-- Endereço -->
            <div class="col-md-8 mt-md-3 mt-3">
                <input v-model="props.modelValue.endereco" type="text" class="form-control" placeholder="Endereço:" />
            </div>

            <!-- Cep -->
            <div class="col-md-4 mt-md-3 mt-3">
                <input v-model="props.modelValue.cep" type="text" class="form-control" placeholder="Cep:" />
            </div>
        </div>
    </div>
</template>
