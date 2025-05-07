import axios from "axios"

const api = axios.create({
  baseURL: "https://wayhome.up.railway.app/api",
})

export default api