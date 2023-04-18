 
<template>
    <div class="container my-2 dashboard">
        <div class="row row-cols-1 row-cols-md-3 justify-content-center ">
            <div class="col mb-3">
                <div class="dashboard1  p-5 text-center">

                    <h1 class="text-light" id="zooCount">Zoo count: </h1>
                    <button @click="type = 'A'" id="zoo" class="mt-2 btn btn-dark">Show Zoos</button>
                </div>
            </div>
            <div class="col mb-3">
                <div class="dashboard2 px-4 py-5 text-center">
                    <h1 class="text-light" id="userCount">User count: </h1>
                    <button @click='type = "B"' id="user" class="mt-2 btn btn-dark">Show Users</button>
                </div>
            </div>
            <div class="col mb-3">
                <div class="dashboard3 px-3 py-5 text-center">
                    <h1 class="text-light" id="animalCount">Animal count: </h1>
                    <button @click='type = "C"' id="animal" class="mt-2 btn btn-dark">Show Animals</button>
                </div>
            </div>
        </div>
        <div v-if="type === 'A'">
            <ShowZoo />
        </div>
        <div v-else-if="type === 'B'">
            <ShowUser />
        </div>
        <div v-else-if="type === 'C'">
            <ShowAnimal />
        </div>
      
      
 
    </div>
</template>
<script setup >
import { ref } from "vue";
import ShowZoo from "../components/ShowZoo.vue";
import ShowUser from "../components/ShowUser.vue";
import ShowAnimal from "../components/ShowAnimal.vue";
let type = ref("B");
 
 
</script>