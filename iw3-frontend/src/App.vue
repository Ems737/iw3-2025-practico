<script setup>
//import { RouterView } from 'vue-router';
import { ref, computed } from "vue";
import Carrito from './components/carrito.vue';
import Productos from './components/productos.vue';
import Home from "./components/Home.vue";

//creo el arreglo de Productos carrito
const carrito = ref([]);

// Agregar productos al carrito
const agregarAlCarrito = (producto) => {
//Guardamos en "item" el objeto producto si p.id === idProducto
  const item = carrito.value.find(p => p.id === producto.id);

  if (item) {
    item.cantidad++;
  } else {
    //Agrego el nuevo producto mediante el operador de propagacion "..."
    carrito.value.push({ ...producto, cantidad: 1});
  }
};

// Quitar producto del carrito
const quitarDelCarrito = (producto) => {
  const item = carrito.value.find(p => p.id === producto.id);
  if (item) {
    item.cantidad--;
    if (item.cantidad <= 0) {
    //Guardo en carrito todos los productos cuyo p.id !== producto.id
      carrito.value = carrito.value.filter(p => p.id !== producto.id);
    }
  }
};

// Computed para el total
  const total = computed(() =>
//Por cada elemento "p", actualizamos la variable sum = sum + (p.precio * p.cantidad)
  carrito.value.reduce((sum, p) => sum + p.precio * p.cantidad, 0)
);

</script>

<template>
  <main>
    <!--<RouterView/>-->
    <Home></Home>
    <Productos @add-to-cart="agregarAlCarrito" />

    <Carrito 
    :carrito="carrito" 
    :total="total"
    @quitar="quitarDelCarrito"
    @agregar="agregarAlCarrito" />
  </main>
</template>

<style></style>