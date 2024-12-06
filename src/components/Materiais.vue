<script setup>
import { reactive } from 'vue';

const props = defineProps(['modelValue']); // modelValue será o material recebido pelo v-model
const emit = defineEmits(['update:modelValue', 'update:maoDeObra']); // Evento para atualizar o material

const estado = reactive({
    materialTemp: '',
    precoTemp: '',
    quantidadeTemp: ''
});

// Atualiza a lista de materiais no componente pai
const adicionaMaterial = () => {
    if (estado.materialTemp && estado.precoTemp && estado.quantidadeTemp) {
        const novoMaterial = {
            nomeMaterial: estado.materialTemp,
            preco: parseFloat(estado.precoTemp),
            quantidade: parseFloat(estado.quantidadeTemp)
        };
        const atualizado = [...props.modelValue, novoMaterial];
        emit('update:modelValue', atualizado); // Atualiza o material no componente pai
        estado.materialTemp = '';
        estado.precoTemp = '';
        estado.quantidadeTemp = '';
    }
};

// Remove um material pelo índice
const removerMaterial = (index) => {
    const atualizado = [...props.modelValue];
    atualizado.splice(index, 1);
    emit('update:modelValue', atualizado);
};

const atualizaMaoDeObra = (novoValor) => {
    emit('update:maoDeObra', parseFloat(novoValor)); // Emitindo o evento corretamente
};

</script>

<template>
    <form @submit.prevent="adicionaMaterial">
        <!-- Formulário para adicionar materiais -->
        <div class="row bg-light ps-4 pe-4 pb-4 pt-2">
            <div class="col-12">
                <h2 class="text-center mb-3">Adicionar materiais</h2>
            </div>
            <div class="col-md-6">
                <input v-model="estado.materialTemp" required class="form-control mt-md-0 mt-3" type="text"
                    placeholder="Material:">
            </div>
            <div class="col-md-2">
                <input v-model="estado.quantidadeTemp" class="form-control mt-md-0 mt-3" type="number"
                    placeholder="Quantidade:">
            </div>
            <div class="col-md-2">
                <input id="preco" v-model="estado.precoTemp" class="form-control mt-md-0 mt-3" type="number" step="any"
                    placeholder="Valor:">
            </div>
            <div class="col-md-2 mt-md-0 mt-3">
                <button class="btn btn-success w-100" type="submit">Adicionar+</button>
            </div>
        </div>
    </form>

    <!-- Lista de materiais com transição -->
    <transition-group name="fade" tag="ul" class="list-group">
        <li v-for="(material, index) in modelValue" :key="material.nomeMaterial" class="row mt-2 g-3 ps-4 pe-4">
            <div class="col-md-6">
                <input class="form-control" type="text" :placeholder="material.nomeMaterial" disabled>
            </div>
            <div class="col-md-2">
                <input class="form-control" type="number" v-model="material.quantidade" placeholder="Quantidade">
            </div>
            <div class="col-md-2">
                <input class="form-control" type="text" :value="'R$ ' + material.preco.toFixed(2).replace('.', ',')"
                    placeholder="Preço" disabled>
            </div>
            <div class="col-md-2 mb-3">
                <button @click="removerMaterial(index)" class="btn btn-danger w-100">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </li>
    </transition-group>

    <!-- Mão de obra -->
    <div class="row mt-4 g-3 ps-4 pe-4">
        <div class="col-md-8">
            <input class="form-control" type="text" placeholder="Mão de obra" disabled>
        </div>
        <div class="col-md-4">
            <input @input="atualizaMaoDeObra($event.target.value)" class="form-control mt-md-0 mt-3" type="number"
                step="any" placeholder="Valor:">
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}
</style>
