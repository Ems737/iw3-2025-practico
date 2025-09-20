<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { ref, computed } from "vue";

// Definimos el emisor de eventos
const emit = defineEmits(["agregar-al-carrito"]);

// Estado
const productos = ref([
    { id: 1, nombre: "Camiseta", precio: 500, stock: 10 },
    { id: 2, nombre: "Pantalón", precio: 1200, stock: 5 },
    { id: 3, nombre: "Zapatos", precio: 2500, stock: 0 }
]);

const nuevoNombre = ref("");
const nuevoPrecio = ref(0);
const nuevoStock = ref(0);
const busqueda = ref("");

// Filtrar productos
const productosFiltrados = computed(() => {
    const texto = busqueda.value.trim().toLowerCase();
    if (!texto) return productos.value; //retorno toda la lista si no se ingreso nada
    //Ahora recorro toda la lista de productos para comparar con lo ingresado por el usuario
    return productos.value.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );
});

// Métodos
const agregarProducto = () => {
    if (nuevoNombre.value.trim() === "" || nuevoPrecio.value <= 0) return;

    productos.value.push({
        id: productos.value.length + 1,
        nombre: nuevoNombre.value,
        precio: nuevoPrecio.value,
        stock: nuevoStock.value
    });

    // Reset
    nuevoNombre.value = "";
    nuevoPrecio.value = 0;
    nuevoStock.value = 0;
};

//Funcion agregar al carrito
const agregarAlCarrito = (producto) => {
  emit("agregar-al-carrito", producto.id);
};
</script>



<template>
    <HeaderComponent />
    <div>
        <h2>Lista de productos</h2>

        <!-- Campo de búsqueda -->
        <input v-model="busqueda" placeholder="Buscar producto..." />

        <!-- Formulario para agregar producto -->
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
                <tr>
                    <td></td>
                    <td><input v-model="nuevoNombre" placeholder="Nombre" /></td>
                    <td><input v-model.number="nuevoPrecio" placeholder="Precio" type="number" /></td>
                    <td><input v-model.number="nuevoStock" placeholder="Stock" type="number" /></td>
                    <td><button @click="agregarProducto">Agregar producto</button></td>
                </tr>
            </thead>
        </table>

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
                    <td><button @click="agregarAlCarrito(producto)">Agregar al carrito</button></td>
                    
                </tr>
            </tbody>
        </table>

        <!-- Mensaje si no hay resultados -->
        <p v-else class="no-resultados">
            No hay productos que coincidan con la búsqueda.
        </p>
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
