<template>
    <form @submit.prevent="onSubmit" id="signup">
   
      <div class="mb-3">
        <label for="name" class="form-label"> Name</label>
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
        <input type="area" v-model="form.area" class="form-control" id="area">
  
      </div>
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
    
 
    // const request = await axios.post(url, props.form).then(response => {
  
    //   val = response.data
    // }) 
    saveOrUpdate("zoo/update",props.form)
    alert("updated Successfully")
    $("#exampleModal").modal('hide')
   
    emit('show')
  }
  </script>