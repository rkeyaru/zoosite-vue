
<template>
    <Navbar v-if="showNavbar" />
    <div id="page-container">
        <RouterView></RouterView>
    </div>
    <Footer v-if="showFooter"></Footer>
</template>
 
<script setup>
import Navbar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"

import { ref, watch } from "vue"
import { useRoute } from "vue-router"
const showNavbar = ref(true)
const showFooter = ref(true)
const route = useRoute() 
watch(route,(route) => { 
 if(route.name == "terms-conditions") { 
    showNavbar.value = false;
    showFooter.value = false;
    console.log(showNavbar.value)
 }
 else { 
    showNavbar.value = true   ;
    showFooter.value = true;
 }
})
</script>
