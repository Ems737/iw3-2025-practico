<script setup>
import { useRoute, useRouter } from "vue-router";
import { useProductos } from "@/stores/useProductos";
import { useCarrito } from "@/stores/useCarrito";

const route = useRoute();
const router = useRouter();

const { getById } = useProductos();
const { agregarAlCarrito } = useCarrito();

const producto = getById(route.params.id);

</script>

<template>
  <div v-if="producto">
    <h2>{{ producto.nombre }}</h2>
    <p>Precio: ${{ producto.precio }}</p>
    <p>Stock: {{ producto.stock }}</p>
    <button @click="agregarAlCarrito(producto)">Agregar al carrito</button>
    <button @click="router.push('/productos')">Volver</button>
  </div>

  <p v-else>Producto no encontrado</p>
  <button @click="router.push('/productos')">Volver</button>
</template>
