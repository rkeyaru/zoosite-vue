<template>
  <form @submit.prevent="onSubmit" id="signup">
 
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" v-model="form.firstName" class="form-control" id="firstName">

    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" v-model="form.lastName" class="form-control" id="lastName">

    </div>
    <div class="mb-3">
      <label for="email" class="form-label"> Email</label>
      <input type="email" v-model="form.email" class="form-control" id="email">

    </div>
    <!-- <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" v-model="form.password" class="form-control" id="password">

    </div> -->
    <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
  </form>
</template>
<script setup>
import axios from "axios"
import { saveOrUpdate } from "../fetch";
const emit = defineEmits()
const props = defineProps(
  {
    form: Object
  }
)


async function onSubmit() {
  
 
  let val = null
  await saveOrUpdate("user/update",props.form)
  alert("updated Successfully")
  $("#exampleModal").modal('hide')
  emit('show')
  

}
</script>