<script setup>
import { useCarrito } from '@/stores/useCarrito'

const { carrito, total, quitarDelCarrito, agregarAlCarrito } = useCarrito()
</script>

<template>
  <div>
    <h2>Carrito</h2>
    <p v-if="carrito.length === 0">El carrito está vacío</p>
    <table v-else>
      <tr v-for="item in carrito" :key="item.id">
        <td>{{ item.nombre }}</td>
        <td>{{ item.cantidad }}</td>
        <td>${{ item.precio * item.cantidad }}</td>
        <td>
          <button @click="quitarDelCarrito(item)">-</button>
          <button @click="agregarAlCarrito(item)">+</button>
        </td>
      </tr>
    </table>
    <p>Total: ${{ total }}</p>
  </div>
</template>
