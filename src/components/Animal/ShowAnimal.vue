<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ type }} Animals</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="type == 'Edit'">
                        <EditAnimal :form="form" @show="showAnimals()" />
                    </div>
                    <div v-if="type == 'Add'">
                        <AddAnimal :form="form" @show="showAnimals()" />
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="mt-5  ">

        <h3 class="text-center  text-secondary h1">Animal Data</h3>

       
            <button @click="type = 'Add', addAnimal()" type="button" class="btn   btn-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Add Animal
            </button>
         



    </div>




    <div class="table-responsive">
        <table class="table table-bordered mt-3 text-center ">


            <thead>
                <tr>

                    <th v-for="i in AHEAD">
                        {{ i }}
                    </th>


                </tr>

            </thead>
            <tbody>
                <tr v-for="animal in posts">
                    <td>

                    </td>
                    <td>
                        {{ animal.name }}
                    </td>
                    <td>
                        {{ animal.gender }}
                    </td>
                    <td>
                        {{ animal.sname }}
                    </td>
                    <td>
                        {{ animal.zoo.name }}
                    </td>
                    <td>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                            @click="type = 'Edit', editAnimal(animal)" class="m-1  btn btn-sm btn-primary ">Edit</button>
                        <button @click="deleteAnimal(animal.id)" class="m-1  btn btn-sm btn-primary">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script setup>
import { ref, onMounted, onUpdated, onActivated, onBeforeUpdate } from 'vue'
import axios from 'axios'
import AddAnimal from "./AddAnimal.vue"
import EditAnimal from "./EditAnimal.vue"
import { getData } from '../fetch'





const type = ref("")
const AHEAD = ["S.No.", "Name", "Gender", "Scientific Name", "Zoo Name", "Operation"]

const form = ref({})

let posts = ref([])
let HOST = "http://localhost:8080/test/zoosite/"
// function showAnimals() {

//     axios.get(HOST + 'animals').then((response) => {
//         posts.value = response.data
//     })
//     console.log("Latest Data")
// }
async function showAnimals() {

    const data = await getData("animals")
    posts.value = data.value
}

onMounted(showAnimals)

function addAnimal() {
    form.value = {
        name: "",
        gender: "",
        sname: "",
        zoo: ""
    }
    try {
        $("#addAnimal")[0].reset()
    }
    catch {

    }
}
function editAnimal(animal) {
    console.log(animal)
    for (let i in animal) {
        form.value[i] = animal[i]
    }
}
async function deleteAnimal(id) {
    let cfm = confirm("Do you really want to delete this animal?")
    if (!cfm) {
        return false
    }
    let url = HOST + "animal/delete"
    let val = null
    const request = await axios.post(url, id, {
        headers: {
            'Content-Type': 'text/plain',
        }
    }).then(response => { val = response.data }).catch(error => (console.log(error)))

    console.log(val)
    showAnimals()


}



defineExpose({ "show": showAnimals })

</script>   