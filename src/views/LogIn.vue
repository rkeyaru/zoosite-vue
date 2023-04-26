 
<template>
  <div class="row justify-content-center   ">

    <div class=" col-6">
      <form @submit.prevent="onSubmit" class="bg-light  mt-5 border rounded p-3">
        <h3 class=" text-center">Log in </h3>
        <div class="mb-3">
          <label for="email" class="form-label"> Email</label>
          <input type="email" class="form-control" v-model="form.email" id="email">

        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="form.password" id="password">

        </div>

        <button type="submit" class="btn btn-sm btn-primary rounded-pill mb-2">Submit</button>
      </form>

    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router'
const router = useRouter()
let form = ref({ email: "", password: "" })
async function onSubmit() {



  let url = "http://localhost:8080/test/zoosite/user/login"
  let val = null
  const request = await axios.post(url, form.value).then(response => {

    val = response.data
  }).catch(error => (error = error));





   if (val == "") {
    alert("Wrong email or password");
  }
  else {
    router.push({ name: 'dashboard' })
  }


}

</script>

<style scoped>
input {
  border-radius: 2rem;
}
</style>