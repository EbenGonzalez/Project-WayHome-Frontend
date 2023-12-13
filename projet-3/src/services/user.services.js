import api from "./config"

const getAllUsers = async () => {
  try {
    const { data } = await api.get("/users")
    return data
  } catch (error) {
    console.log(error)
  }
}

const getAllVolunteers = async () => {
  try {
    const { data } = await api.get("/users")
    return data.filter(user => user.userRole === "volunteer")
  } catch (error) {
    console.log(error)
  }
}

const getOneUser = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOwnUser = async () => {
  try {
    const { data } = await api.get("/users/me", {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    localStorage.setItem('role', data.user.role)
    return data
  } catch (error) {
    console.log(error)
  }
}

const createUser = async (body) => {
  try {
    const { data } = await api.post("/users", body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateOwnUser = async (body) => {
  try {
    const { data } = await api.put(`/users/me`, body, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (id, body) => {
  try {
    const { data } = await api.put(`/users/${id}`, body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteOwnUser = async () => {
  try {
    const { data } = await api.delete(`/users/me`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (id) => {
  try {
    const { data } = await api.delete(`/users/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getAllUsers, getAllVolunteers, getOneUser, getOwnUser, createUser, updateOwnUser, updateUser, deleteOwnUser, deleteUser }
