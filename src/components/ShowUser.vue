<template>
    <h1 class="text-center my-5">
        User Data
    </h1>
    <table class="table table-bordered">
        <thead>

            <tr>


                <th>
                    S.No.
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="i in userdata">

                <td>
                    {{  count }}
                </td>


                <td>
                    {{ i.firstName }}
                </td>
                <td>
                    {{ i.lastName }}
                </td>
                <td>
                    {{ i.email }}
                </td>
            </tr>

        </tbody>
    </table>
</template>
<script setup>
import { ref } from "vue";
let userdata = [{ firstName: "Rahul", lastName: "Kumar", email: "rahul@gmail.com" },
{ firstName: "Rohit", lastName: "Kumar", email: "rohit  @gmail.com" },
{ firstName: "Vivek", lastName: "Kumar", email: "vivek@gmail.com" }

]

let count = ref(0);
</script>