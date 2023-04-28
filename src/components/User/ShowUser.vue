<template>
   
   

   <h1 class="mt-5 text-center bg-secondary">User Data</h1>
    <!-- Button trigger modal -->
    <button @click="type='Add' ,addUser()" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        <EditUser :form="form" @show="showUser()"  />
                    </div>
                    <div v-if="type == 'Add'">
                        <AddUser :form="form" @show="showUser()" />
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
                    <button  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editUser(user) , type='Edit'" class="m-1 btn btn-sm btn-primary">Edit</button>
                    <button @click="deleteUser(user.userId)" class="m-1 btn btn-sm btn-primary">Delete</button>
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
let form  = ref({})
async function showUser() {
    let val = null
    await axios.get(HOST + 'users').then((response) => {
        posts.value = response.data
        val = response.data

    })
 
   
}


onMounted(showUser)



function addUser() {
    form.value = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    console.log(form.value)
    console.log("Emptied successfully")
    try {
        $("#addUser")[0].reset()
    }
    catch {

    }
}
function editUser(user) {
    console.log(user)
    for(let i in user) { 
        form.value[i] = user[i]
    }
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