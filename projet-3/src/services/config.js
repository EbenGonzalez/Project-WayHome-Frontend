import axios from "axios"

const api = axios.create({
  baseURL: "wayhome.up.railway.app",
})

export default api