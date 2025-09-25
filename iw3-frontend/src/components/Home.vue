<script setup>
import { computed, ref } from 'vue'
//import { useRouter } from 'vue-router'

//const router = useRouter()
const nombre = ref('')
const registrado = ref(false)

//Validacion del nombre
const nombreValido = computed(() => nombre.value.trim().length >= 3)

function registrarCliente() {
    if (!nombreValido.value) {
        alert('El nombre debe tener al menos 3 caracteres')
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

                <!-- Input con clases dinámicas -->
                <input v-model="nombre" type="text" placeholder="Ingrese el nombre" class="campo"
                    :class="{ invalido: !nombreValido && nombre.length > 0 }" />

                <!-- Botón deshabilitado si nombre no es válido -->
                <button @click="registrarCliente" class="btn btn-registrar" :disabled="!nombreValido">
                    Registrar
                </button>

                <!-- Mensaje de error dinámico -->
                <p v-if="!nombreValido && nombre.length > 0" class="error">
                    El nombre debe tener al menos 3 caracteres
                </p>

            </div>

            <div v-else>
                <h2 class="bienvenida">¡Bienvenido, {{ nombre }}!</h2>
                <!--<button @click="router.push('/lista')">Continuar</button>-->
            </div>
        </div>
    </div>
</template>

<style scoped>
html,
body {
    height: 100%;
    margin: 0;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
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
    transition: border 0.3s;
}

/* 3) Estilos dinámicos según validez */
.campo.invalido {
    border: 2px solid #dc3545;
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

.btn-registrar:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

.error {
    color: #dc3545;
    font-size: 0.9em;
    margin-top: 5px;
}

.bienvenida {
    color: #28a745;
}
</style>