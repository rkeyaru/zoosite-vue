<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ type }} Zoo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="type == 'Edit'">
                        <EditZoo v-if="ok" :form="form" @show="showZoo()" />
                    </div>
                    <div v-if="type == 'Add'">
                        <AddZoo v-if="ok" :form="form" @show="showZoo()" />


                    </div>

                </div>

            </div>
        </div>
    </div>


    <div class="mt-5  ">

        <h3 class="text-center  text-secondary h1">Zoo Data</h3>

        
            
       

            <button @click="type = 'Add', addZoo()" type="button" class="btn      btn-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Add Zoo
            </button>
       




    </div>




    <div class="table-responsive">
        <table class="table table-bordered mt-3 text-center ">


            <thead>
                <tr>

                    <th v-for="i in ZHEAD">
                        {{ i }}
                    </th>


                </tr>

            </thead>
            <tbody>

                <tr v-for="zoo in posts">
                    <td>

                    </td>
                    <td>
                        {{ zoo.name }}
                    </td>
                    <td>
                        {{ zoo.state }}
                    </td>
                    <td>
                        {{ zoo.city }}
                    </td>
                    <td>
                        {{ zoo.area }}
                    </td>
                    <td>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" @click="type = 'Edit', editZoo(zoo)"
                            class="m-1 btn btn-sm btn-primary ">Edit</button>
                        <button @click="deleteZoo(zoo.id)" class="m-1 btn btn-sm  btn-primary">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script setup>
import { ref, onMounted, onUpdated, onActivated, onBeforeUpdate } from 'vue'
import axios from 'axios'
import AddZoo from "./AddZoo.vue"
import EditZoo from "./EditZoo.vue"
import { getData } from '../fetch'


const ok = ref(true)


const type = ref("")
const ZHEAD = ["S.No.", "Name", "State", "City", "Area", "Operation"]

const form = ref({})

let posts = ref([])
let HOST = "http://localhost:8080/test/zoosite/"
// function showZoo() {

//     axios.get('http://localhost:8080/test/zoosite/zoos').then((response) => {
//         posts.value = response.data
//     })
//     console.log("Latest Data")
// }

async function showZoo() {

    const data = await getData("zoos")
    posts.value = data.value
}
onMounted(showZoo)

function addZoo() {
    form.value = {
        name: "",
        state: "",
        city: "",
        area: ""
    }
    console.log("Emptied successfully")
    try {
        $("#addZoo")[0].reset()
    }
    catch {

    }
}
function editZoo(zoo) {
    console.log(zoo)
    for (let i in zoo) {
        form.value[i] = zoo[i]
    }
}
async function deleteZoo(id) {
    let cfm = confirm("Do you really want to delete this zoo")
    if (!cfm) {
        return false
    }
    let url = HOST + "zoo/delete"
    let val = null
    const request = await axios.post(url, id, {
        headers: {
            'Content-Type': 'text/plain',
        }
    }).then(response => { val = response.data }).catch(error => (console.log(errro)))

    console.log(val)
    showZoo()


}



defineExpose({ "show": showZoo })


</script>   