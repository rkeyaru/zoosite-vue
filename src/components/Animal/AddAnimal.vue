<template>
    <form @submit.prevent="onSubmit" id="addAnimal">
        <div class="mb-3">
            <label for="name" class="form-label"> Name</label>
            <input type="text" v-model="form.name" class="form-control" id="name">
        </div>
        <div class="mb-3">
            <label for="state" class="form-label">Gender</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="Male" v-model="form.gender" name="flexRadioDefault"
                    id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="Female" v-model="form.gender" name="flexRadioDefault"
                    id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>

        </div>
        <div class="mb-3">
            <label for="city" class="form-label">Scientific Name </label>
            <input type="text" v-model="form.sname" class="form-control" id="city">

        </div>
        <div class="mb-3">
            <label for="zooName" class="form-label">Zoo </label>
            <select v-model="form.zoo" class="form-select" aria-label="Default select example" id="zooName">

                <option v-for="zoo in zoos" :value="zoo">{{ zoo.name }}</option>


            </select>

        </div>
        <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
        {{ form }}
    </form>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue"


const picker = ref("Male")

const emit = defineEmits()
let form = ref({ name: "", gender: "", sname: "", zoo: "" })

const zoos = ref(null)
onMounted(getZoo)
async function getZoo() {
    let url = "http://localhost:8080/test/zoosite/zoos"
    let val = null
    const request = await axios.get(url).then(response => {

        zoos.value = response.data
    }).catch(error => (error = error));
}
async function onSubmit() {



    let url = "http://localhost:8080/test/zoosite/animal/create"
    let val = null
    const request = await axios.post(url, form).then(response => {

        val = response.data
    }).catch(error => (error = error));
    alert(val)
    $("#exampleModal").modal('hide');
    emit('show')
    $("#addAnimal")[0].reset()
    
}
</script>
