<script setup>
import RegistroCliente from './components/RegistroCliente.vue'
</script>

<template>
  <main>
    <RegistroCliente />
  </main>
</template>

<style scoped>

html, body, #app {
  height: 100%;   /* el contenedor principal ocupa toda la ventana */
  margin: 0;      /* elimina el margen por defecto del body */
}

main {
  display: flex;
  justify-content: center; /* centra horizontal */
  align-items: center;     /* centra vertical */
  min-height: 100%;       /* para que ocupe toda la ventana */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>