
<template>
    <div class="container my-2 dashboard">
        <div class="row row-cols-1 row-cols-md-3 justify-content-center ">
            <div class="col mb-3">
                <div class="border border-dark dashboard-style bg-light  p-5 text-center">
                    <h1 class="text-light" id="zooCount"><img src="../assets/img/zoo.png" class="w-50" alt="">
                    </h1>
                    <button @click="type = 'Zoo', show()" id="zoo" class="mt-2 btn btn-dark">Show Zoos</button>
                </div>
            </div>
            <div class="col mb-3">
                <div class="border border-dark dashboard-style bg-light  p-5 text-center">
                    <h1 class="text-light" id="userCount"> <img src="../assets/img/user.png" class="w-50" alt=""></h1>
                    <button @click="type = 'User', show()" id="user" class="mt-2 btn btn-dark">Show
                        Users</button>
                </div>
            </div>
            <div class="col mb-3">
                <div class="border border-dark dashboard-style  px-3 py-5 text-center ">
                    <h1 class="text-light" id="animalCount"> </h1>
                    <button @click="type = 'Animal', show()" id="animal" class="mt-2 btn btn-dark">Show Animals</button>
                </div>
            </div>
        </div>
        <div class="p-0 m-0" v-if="type == 'Zoo'">

            <ShowZoo ref="child" />
        </div>
        <div class="p-0 m-0" v-if="type == 'User'">
            <ShowUser ref="child" />
        </div>
        <div class="p-0 m-0" v-if="type == 'Animal'">
            <ShowAnimal ref="child" />
        </div>


    </div>
</template>



<script setup>
import { onMounted, ref } from "vue"
let type = ref("Zoo")


import ShowUser from "../components/User/ShowUser.vue"
import ShowZoo from "../components/Zoo/ShowZoo.vue"
import ShowAnimal from "../components/Animal/ShowAnimal.vue"

const child = ref(null)

function show() {
    child.value.show()
}

</script>