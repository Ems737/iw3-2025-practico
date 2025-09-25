<script setup>
//import HeaderComponent from "@/components/HeaderComponent.vue";
import { ref, computed } from "vue";

// Recibo del padre el estado del carrito y el total
const props = defineProps({
  carrito: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

// Emito los eventos al componente padre cuando el usuario interactúa
const emit = defineEmits(["quitar", "agregar"]);

// Funciones locales para disparar eventos
const agregar = (producto) => emit("agregar", producto);
const quitar = (producto) => emit("quitar", producto);

</script>

<template>
  <div>
    <h2>Carrito</h2>

    <table v-if="carrito.length">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in carrito" :key="item.id">
          <td>{{ item.nombre }}</td>
          <td>${{ item.precio }}</td>
          <td>{{ item.cantidad }}</td>
          <td>${{ item.precio * item.cantidad }}</td>
          <td>
            <button @click="agregar(item)">+</button>
            <button @click="quitar(item)">−</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>El carrito está vacío</p>

    <h3 v-if="carrito.length">Total: ${{ total }}</h3>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
  cursor: pointer;
}
</style>