<template>
    <form @submit.prevent="onSubmit" id="addZoo">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" v-model="form.name" class="form-control" id="name">

        </div>
        <div class="mb-3">
            <label for="state" class="form-label">State</label>
            <input type="text" v-model="form.state" class="form-control" id="state">

        </div>
        <div class="mb-3">
            <label for="city" class="form-label"> City</label>
            <input type="text" v-model="form.city" class="form-control" id="city">

        </div>
        <div class="mb-3">
            <label for="area" class="form-label">Area</label>
            <input type="number" v-model="form.area" class="form-control" id="area">

        </div>
        <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
    </form>
</template>
<script setup>

import { onMounted, ref } from "vue"
import { saveOrUpdate } from "../fetch"
const emit = defineEmits()

const props = defineProps({
    form: Object
})

onMounted(() => (console.log("Mouneted from start")))
async function onSubmit() {




    for (let i in props.form) {
        if (typeof (props.form[i]) == 'string') {
            props.form[i] = props.form[i].trim()
            if (props.form[i] == "") {
                let title = i[0].toUpperCase() + i.slice(1)
                alert(title + " can't be empty")
                return false;
            }
        }
    }


    // const request = await axios.post(url, props.form).then(response => {

    //     val = response.data
    // }).catch(error => (error = error));

    await saveOrUpdate("zoo/create", props.form)
    alert("Zoo added successfully")
    $("#exampleModal").modal('hide');
    emit('show')
    $("#addZoo")[0].reset()

}
</script>