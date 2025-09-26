<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" active-class="activo">Inicio</RouterLink> |
      <RouterLink to="/productos" active-class="activo">Productos</RouterLink> |
      <RouterLink to="/clientes" active-class="activo">Clientes</RouterLink> |
      <RouterLink to="/carrito" active-class="activo">Carrito</RouterLink>
    </nav>

    <hr />

    <RouterView />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
.activo {
  font-weight: bold;
  color: green;
}
</style>