import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Movies from "@/views/Movies.vue";
import BusquedaProductos from "@/views/busquedaProductos.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/movies",
            name: "movies",
            component: Movies
        },
        {
            path: "/lista",
            name: "lista",
            component: BusquedaProductos
        },
    ]
})


export default router;