<template>
    <form @submit.prevent="onSubmit" id="addZoo">
        <div class="mb-3">
            <label for="name" class="form-label">First Name</label>
            <input type="text" v-model="form.name" class="form-control" id="name">

        </div>
        <div class="mb-3">
            <label for="state" class="form-label">Last Name</label>
            <input type="text" v-model="form.state" class="form-control" id="state">

        </div>
        <div class="mb-3">
            <label for="city" class="form-label"> City</label>
            <input type="text" v-model="form.city" class="form-control" id="city">

        </div>
        <div class="mb-3">
            <label for="area" class="form-label">Area</label>
            <input type="password" v-model="form.area" class="form-control" id="area">

        </div>
        <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
    </form>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue"
const emit  = defineEmits()
let form = ref({ name: "", state: "", city: "", area: "" })
async function onSubmit() {



    let url = "http://localhost:8080/test/zoosite/zoo/create"
    let val = null
    const request = await axios.post(url, form.value).then(response => {

        val = response.data
    }).catch(error => (error = error));
    alert(val)
    $("#exampleModal").modal('hide');
    emit('show')
    $("#addZoo")[0].reset()

}
</script>