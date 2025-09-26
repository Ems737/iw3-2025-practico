<script setup>
import { ref } from "vue";

const nombre = ref("");
const registrado = ref(false);

function registrarCliente() {
  if (nombre.value.trim().length < 3) {
    alert("El nombre debe tener al menos 3 caracteres");
    return;
  }
  registrado.value = true;
}
</script>

<template>
  <div>
    <h2>Registro de Clientes</h2>

    <div v-if="!registrado">
      <input v-model="nombre" placeholder="Ingrese nombre" class="campo"
        :class="{ invalido: nombre.length > 0 && nombre.length < 3 }" />
      <button @click="registrarCliente" :disabled="nombre.length < 3">
        Registrar
      </button>
    </div>

    <div v-else>
      <h3>¡Bienvenido, {{ nombre }}!</h3>
    </div>
  </div>
</template>

<style scoped>
.campo {
  border: 1px solid #aaa;
  padding: 6px;
}
.invalido {
  border-color: red;
}
</style>
