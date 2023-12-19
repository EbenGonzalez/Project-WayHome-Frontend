import axios from "axios"

const api = axios.create({
  baseURL: "wayhome.up.railway.app/api",
})

export default api