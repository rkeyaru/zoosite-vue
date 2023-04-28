<template>
    <form @submit.prevent="onSubmit" id="editAnimal">
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
                    id="flexRadioDefault2" >
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
       
    </form>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue"


const picker = ref("Male")

const emit = defineEmits()
const props = defineProps(["form"])

const zoos = ref(null)

onMounted(getZoo)
async function getZoo() {
    let url = "http://localhost:8080/test/zoosite/zoos"
    let val = null
    const request = await axios.get(url, props.form.value).then(response => {

        zoos.value = response.data
    }).catch(error => (error = error));
}
async function onSubmit() {



    let url = "http://localhost:8080/test/zoosite/animal/update"
    let val = null
    const request = await axios.post(url, props.form).then(response => {

        val = response.data
    }).catch(error => (error = error));
    alert(val)
    $("#exampleModal").modal('hide');
    emit('show')
    $("#editAnimal")[0].reset()
    emit("show")

}
</script>
