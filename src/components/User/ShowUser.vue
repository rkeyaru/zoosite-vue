<template>
   
   

   <h1 class="mt-5 text-center">User Data</h1>
    <!-- Button trigger modal -->
    <button @click="type='Add'" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add User
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ type  }} User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="type == 'Edit'">
                        <EditUser :form="value"  />
                    </div>
                    <div v-if="type == 'Add'">
                        <AddUser @show="showUser()" />
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  <div class="table-responsive">
    <table class="table table-bordered mt-3  text-center">
        <thead>
            <tr>

                <th v-for="i in UHEAD">
                    {{ i }}
                </th>

            </tr>

        </thead>
        <tbody>
            <tr v-for="user in posts">
                <td>

                </td>
                <td>
                    {{ user.firstName }}
                </td>
                <td>
                    {{ user.lastName }}
                </td>
                <td>
                    {{ user.email }}
                </td>
                <td>
                    <button  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editUser(user) , type='Edit'" class="mx-1 btn btn-sm btn-warning">Edit</button>
                    <button @click="deleteUser(user.userId)" class="mx-1 btn btn-sm btn-danger">Delete</button>
                </td>



            </tr>
        </tbody>
    </table>
</div>
</template>

<script setup>
import AddUser from "./AddUser.vue"
import EditUser from "./EditUser.vue"

import { ref, onMounted, onUpdated, onActivated } from 'vue'
import axios from 'axios'
let HOST = "http://localhost:8080/test/zoosite/"
const type = ref("")
const value  = ref({})
const UHEAD = ["S.No.", "First Name", "Last Name", "email", "Operation"]
 
let posts = ref([])
let values  = ref({})
async function showUser() {
    let val = null
    await axios.get(HOST + 'users').then((response) => {
        posts.value = response.data
        val = response.data

    })
 
   
}


onMounted(showUser)


function editUser(user) {
  value.value = user 
}
async function deleteUser(user) {
    let cfm = confirm("Do you really want to delete this zoo")
    if (!cfm) {
        return false
    }
   
    let val = null
    let url = HOST + 'user/delete'
   
    const request = await axios.post(url, user, {
        headers: {
            'Content-Type': 'text/plain',
        }
    }).then(response => {

        val = response.data
    })
    showUser();
}

defineExpose({"show":showUser})
</script>