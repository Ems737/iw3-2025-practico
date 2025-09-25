<script setup>
//import HeaderComponent from "@/components/HeaderComponent.vue";

import { ref, computed } from "vue";
import Carrito from "./carrito.vue";

//>>>> HIJO <<<
// Defino el emisor de eventos del hijo
const emit = defineEmits(["add-to-cart"]);


// Estado
const productos = ref([
    { id: 1, nombre: "Camiseta", precio: 500, stock: 10 },
    { id: 2, nombre: "Pantalón", precio: 1200, stock: 5 },
    { id: 3, nombre: "Zapatos", precio: 2500, stock: 0 }
]);

const busqueda = ref("");

// Filtrar productos
const productosFiltrados = computed(() => {
    const texto = busqueda.value.trim().toLowerCase();
    if (!texto) return productos.value; //retorno toda la lista si no se ingreso nada
    //Recorro toda la lista de productos para comparar con lo ingresado por el usuario
    return productos.value.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );
});

const addToCart = (producto) => {
  emit("add-to-cart", producto);
};

</script>



<template>
    <!--<HeaderComponent />-->
    <div>
        <h2>Lista de productos</h2>

        <!-- Campo de búsqueda -->
        <input v-model="busqueda" placeholder="Buscar producto..." />

        <hr />

        <!-- Tabla de productos -->
        <table v-if="productosFiltrados.length">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productosFiltrados" :key="producto.id"
                    :class="{ sinStock: producto.stock === 0 }">
                    <td>{{ producto.id }}</td>
                    <td><strong>{{ producto.nombre }}</strong></td>
                    <td>${{ producto.precio }}</td>
                    <td>Stock: {{ producto.stock }}</td>
                    <td><button @click="addToCart(producto)">Agregar al carrito</button></td>
                </tr>
            </tbody>
        </table>

        <!-- Mensaje si no hay resultados -->
        <p v-else>No hay productos que coincidan con la búsqueda.</p>
    </div>
    <div>
    </div>
</template>

<style scoped>
.sinStock {
    color: red;
}

button {
    margin-left: 10px;
    cursor: pointer;
}
</style>
