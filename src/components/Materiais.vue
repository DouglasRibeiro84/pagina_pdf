<script setup>
import { reactive } from 'vue';

const estado = reactive({
    materialTemp: '',
    precoTemp: '',
    quantidadeTemp: '',
    material: []
})

const adicionaMaterial = () => {
    if (estado.materialTemp && estado.precoTemp && estado.quantidadeTemp) {
        const materiaNovo = {
            nomeMaterial: estado.materialTemp,
            preco: parseFloat(estado.precoTemp), // Garantindo que seja um número decimal
            quantidade: parseFloat(estado.quantidadeTemp) // Garantindo que seja um número decimal
        }
        estado.material.push(materiaNovo);
        estado.materialTemp = '';
        estado.precoTemp = '';
        estado.quantidadeTemp = '';
    }
}

const removerMaterial = (index) => {
    estado.material.splice(index, 1);
}
</script>

<template>
    <form @submit.prevent="adicionaMaterial">
        <div class="row bg-light ps-4 pe-4 pb-4 pt-2 border">
            <div class="col-12">
                <h2 class="text-center mb-3">Adicionar materiais</h2>
            </div>
            <div class="col-md-6">
                <input v-model="estado.materialTemp" required class="form-control mt-md-0 mt-3" type="text" placeholder="Material">
            </div>
            <div class="col-md-2">
                <input v-model="estado.precoTemp" class="form-control mt-md-0 mt-3" type="number" step="any" placeholder="Valor">
            </div>
            <div class="col-md-2">
                <input v-model="estado.quantidadeTemp" class="form-control mt-md-0 mt-3" type="number" placeholder="Quantidade">
            </div>
            <div class="col-md-2 mt-md-0 mt-3">
                <button class="btn btn-success w-100" type="submit">Adicionar+</button>
            </div>
        </div>
    </form>

    <ul class="list-group">
        <li v-for="(material, index) in estado.material" :key="material.nomeMaterial" class="row mt-2 g-3 ps-4 pe-4">
            <div class="col-md-6">
                <input class="form-control" type="text" :placeholder="material.nomeMaterial" disabled>
            </div>
            <div class="col-md-2">
                <input class="form-control" type="number" step="any" v-model="material.preco" :placeholder="material.preco.toFixed(2)">
            </div>
            <div class="col-md-2">
                <input class="form-control" type="number" v-model="material.quantidade" :placeholder="material.quantidade.toFixed(2)">
            </div>
            <div class="col-md-2 mb-3">
                <button @click="removerMaterial(index)" class="btn btn-danger w-100">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </li>
    </ul>

    <div class="row p-4 border-bottom">
        <div class="col-md-6 mb-md-0 mb-3">
            <button class="btn btn-warning text-white w-100">
                Limpar <i class="ms-1 bi bi-eraser"></i>
            </button>
        </div>
        <div class="col-md-6">
            <button class="btn btn-success w-100">
                Salvar <i class="ms-1 bi bi-box-arrow-down"></i>
            </button>
        </div>
    </div>
</template>
