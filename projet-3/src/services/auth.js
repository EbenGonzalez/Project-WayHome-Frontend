import api from "./config"

const login = async (body) => {
  try {
    const { data } = await api.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    console.log(error)
  }
}

const signup = async (body) => {
  try {
    const { data } = await api.post('/auth/signup', body)
    localStorage.setItem('token', data.token)
    return 200;
  } catch (error) {
    console.error(error)
  }
}

const signupNew = async (body) => {
  try {
    const { data } = await api.post('/auth/signup', body)
    return 200;
  } catch (error) {
    console.error(error)
  }
}

function logout() {
  localStorage.removeItem('token')
}

export { login, signup, logout, signupNew }