import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductos = defineStore("productos", () => {
    const productos = ref([
        { id: 1, nombre: "Camiseta", precio: 20, stock: 10 },
        { id: 2, nombre: "Pantalón", precio: 35, stock: 5 },
        { id: 3, nombre: "Zapatillas", precio: 50, stock: 0 },
        { id: 4, nombre: "Campera", precio: 80, stock: 3 },
        { id: 5, nombre: "Gorra", precio: 15, stock: 12 },
        { id: 6, nombre: "Bufanda", precio: 10, stock: 8 },
        { id: 7, nombre: "Guantes", precio: 12, stock: 7 },
        { id: 8, nombre: "Medias", precio: 5, stock: 25 },
        { id: 9, nombre: "Shorts", precio: 18, stock: 9 },
        { id: 10, nombre: "Buzo", precio: 40, stock: 4 },
        { id: 11, nombre: "Camisa", precio: 30, stock: 6 },
        { id: 12, nombre: "Cinturón", precio: 22, stock: 10 },
        { id: 13, nombre: "Chaleco", precio: 28, stock: 2 },
        { id: 14, nombre: "Reloj", precio: 120, stock: 1 },
        { id: 15, nombre: "Mochila", precio: 45, stock: 5 },
    ]);

    const getById = (id) => productos.value.find((p) => p.id === Number(id));

    return { productos, getById };
});