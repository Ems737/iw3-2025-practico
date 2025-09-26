<script setup>
import { useProductos } from "@/stores/useProductos";
import { useCarrito } from "@/stores/useCarrito";

const { productos } = useProductos();
const { agregarAlCarrito } = useCarrito();

</script>

<template>
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      <li v-for="p in productos" :key="p.id" :class="{ sinStock: productos.stock === 0 }">
        {{ p.nombre }} - ${{ p.precio }}
        <button @click="agregarAlCarrito(p)">Agregar</button>
      </li>
    </ul>
  </div>
</template>




<style scoped>
.sinStock {
    color: red;
}

button {
    cursor: pointer;
    margin-left: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

th,
td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: left;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
