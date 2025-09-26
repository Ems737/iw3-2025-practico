import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Productos from "./views/Productos.vue";
import Clientes from "./views/Clientes.vue";
import Carrito from "./views/Carrito.vue";
import DetalleProducto from "./views/DetalleProducto.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/productos", component: Productos },
  { path: "/productos/:id", component: DetalleProducto, props: true },
  { path: "/clientes", component: Clientes },
  { path: '/carrito', component: Carrito },
  { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; //restaurar scroll
  }
});

export default router;