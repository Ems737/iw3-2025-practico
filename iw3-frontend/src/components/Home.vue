<script setup>
import { ref } from 'vue'
//import { useRouter } from 'vue-router'

//const router = useRouter()
const nombre = ref('')
const registrado = ref(false)

function registrarCliente() {
    if (nombre.value.trim() === '') {
        alert('Por favor ingresa un nombre válido')
        return
    }
    console.log(`Cliente registrado: ${nombre.value}`)
    registrado.value = true
}
</script>

<template>
    <div class="wrapper">
        <div class="contenedor">
            <div v-if="!registrado">
                <h2 class="titulo">Registro de Clientes</h2>
                <input v-model="nombre" type="text" placeholder="Ingrese el nombre" class="campo" />
                <button @click="registrarCliente" class="btn btn-registrar">
                    Registrar
                </button>
            </div>

            <div v-else>
                <h2 class="bienvenida">¡Bienvenido, {{ nombre }}!</h2>
                <button @click="router.push('/lista')">Continuar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.wrapper {
  display: flex;
  justify-content: center;    /* centra horizontal */
  align-items: center;        /* centra vertical */
  height: 100%;
}

.contenedor {
    max-width: 400px;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    font-family: sans-serif;
}

.titulo {
    margin-bottom: 10px;
}

.campo {
    padding: 8px;
    width: 100%;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #aaa;
}

.btn {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
}

.btn-registrar {
    background-color: #28a745;
}

.btn-cancelar {
    margin-top: 15px;
    background-color: #dc3545;
}

.bienvenida {
    color: #28a745;
}
</style>