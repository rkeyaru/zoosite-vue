 
<template>
  <div class="row ">
    <div class="col-sm-12 col-lg-6  p-0 leftsign">
      <img src="../assets/img/image.jpg" class="w-100 h-100 m-0 " alt="">
    </div>
    <div class="col-sm-12 col-lg-6   bg-light   border rounded-bottom">

      <div class="row   justify-content-center ">
        <form @submit.prevent="onSubmit" class="w-75 mt-5 " id="signup">
          <h3 class=" text-center mt-2   ">Sign up</h3>
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
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="form.password" class="form-control" id="password">

          </div>
          <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>






<script setup>
import { ref } from 'vue';
import axios from "axios";


let form = ref({ firstName: "", lastName: "", email: "", password: "" })
async function onSubmit() {



  let url = "http://localhost:8080/test/zoosite/user/create"
  let error = false
  let val = null
  const request = await axios.post(url, form.value).then(response => {
    
    val = response.data
  }).catch(error => (error = error));
  alert(val)

}

</script>

<style scoped>
input {
  border-radius: 2rem;
}
</style>