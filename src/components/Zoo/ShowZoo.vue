<template>
    <h1 class="mt-5 text-center">Zoo Data</h1>
    <!-- Button trigger modal -->
    <button @click="type = 'Add'" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Zoo
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ type }} Zoo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="type == 'Edit'">
                        <EditZoo  :form="form" />
                    </div>
                    <div v-if="type == 'Add'">
                        <AddZoo @show="showZoo()"  />
                    </div>
                </div>

            </div>
        </div>
    </div>


    <table class="table table-bordered mt-3 text-center">
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
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" @click="type = 'Edit',editZoo(zoo)"
                        class="mx-1 btn btn-sm btn-warning">Edit</button>
                    <button @click="deleteZoo(zoo.id)" class="mx-1 btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
 
<script setup>
import { ref, onMounted, onUpdated, onActivated, onBeforeUpdate } from 'vue'
import axios from 'axios'
import AddZoo from "./AddZoo.vue"
import EditZoo from "./EditZoo.vue"


 


const type = ref("")
const ZHEAD = ["S.No.", "Name", "State", "City", "Area", "Operation"]
 
const form = ref({})

let posts = ref([])
let HOST = "http://localhost:8080/test/zoosite/"
function showZoo() {
   
    axios.get('http://localhost:8080/test/zoosite/zoos').then((response) => {
        posts.value = response.data
    })
    console.log("Latest Data")
}

 
onMounted(showZoo)


function editZoo(zoo) {
form.value = zoo
}
async function deleteZoo(id) {
    let cfm = confirm("Do you really want to delete thsi zoo")
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

 
 
defineExpose({"show":showZoo})

</script>   