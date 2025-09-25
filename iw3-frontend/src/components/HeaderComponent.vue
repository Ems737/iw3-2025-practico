<script setup></script>

<template>
    <header class="header">
        <h1>Tienda de Productos</h1>

        <nav>
            <ul class="nav-list">
                <li><router-link class="link" :to="{ name: 'lista' }">Lista</router-link></li>
                <li><router-link class="link" :to="{ name: 'carrito' }">Carrito de compras</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style>
.header {
    background-color: black;
    color: white;
    text-align: center;
    padding: 40px;

    .nav-list {
        display: flex;
        justify-content: space-around;

        .link {
            color: white;
            text-decoration: none;
        }
    }
}
</style>