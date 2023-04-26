<script setup>
import Navbar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
    <Navbar />
    <RouterView class="content"> </RouterView>

    <Footer></Footer>
</template>
 