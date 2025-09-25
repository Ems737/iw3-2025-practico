import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Carrito from "@/components/carrito.vue";
import BusquedaProductos from "@/components/productos.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/carrito",
            name: "carrito",
            component: Carrito
        },
        {
            path: "/lista",
            name: "lista",
            component: BusquedaProductos
        },
    ]
})


export default router;