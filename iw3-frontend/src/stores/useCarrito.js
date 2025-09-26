import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCarrito = defineStore('carrito', () => {
  const carrito = ref([])

  const total = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  )

  function agregarAlCarrito(producto) {
    const item = carrito.value.find(p => p.id === producto.id)
    if (item) {
      item.cantidad++
    } else {
      carrito.value.push({ ...producto, cantidad: 1 })
    }
  }

  function quitarDelCarrito(producto) {
    const item = carrito.value.find(p => p.id === producto.id)
    if (item) {
      if (item.cantidad > 1) {
        item.cantidad--
      } else {
        carrito.value = carrito.value.filter(p => p.id !== producto.id)
      }
    }
  }

  return { carrito, total, agregarAlCarrito, quitarDelCarrito }
})
