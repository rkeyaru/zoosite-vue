<template>
    <form @submit.prevent="onSubmit" id="addAnimal">
        <div class="mb-3">
            <label for="name" class="form-label"> Name</label>
            <input type="text" v-model="form.name" class="form-control" id="name">
        </div>
        <div class="mb-3">
            <label for="state" class="form-label">Gender </label>
            <input type="text" v-model="form.sname" class="form-control" id="state">

        </div>
        <div class="mb-3">
            <label for="city" class="form-label">Scientific Name </label>
            <input type="text" v-model="form.city" class="form-control" id="city">

        </div>
        <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </div>
        <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
    </form>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue"
const emit = defineEmits()
let form = ref({ name: "", gender: "", sname: "", zoo: "" })
async function onSubmit() {



    let url = "http://localhost:8080/test/zoosite/animal/create"
    let val = null
    const request = await axios.post(url, form.value).then(response => {

        val = response.data
    }).catch(error => (error = error));
    alert(val)
    $("#exampleModal").modal('hide');
    emit('show')
    $("#addAnimal")[0].reset()

}
</script>