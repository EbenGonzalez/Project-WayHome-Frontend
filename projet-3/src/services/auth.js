import api from "./config";

const login = async (body) => {
  try {
    const {data} = await api.post('/auth/login', body)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  login
}