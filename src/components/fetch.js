// fetch.js
import { ref } from 'vue'
import axios from 'axios'
const HOST = "http://localhost:8080/test/zoosite/" 
export async function getData(url) {
 
  url = HOST + url
  const data = ref(null)
  const error = ref(null)

  await axios
    .get(url)
    .then((res) => {
      data.value = res.data
      console.log(res.data)
    })
    .catch((err) => (error.value = err))
  console.log(data.value)
  return data
}

export async function saveOrUpdate(url, form) {
  const data = ref(null)
  const error = ref(null)
  url = HOST + url
  await axios
    .post(url, form)
    .then((res) => {
      data.value = res.data
      console.log(data.value)
    })
    .catch((err) => (error.value = err))

  return data
}
