import api from "./config"

const getAllPets = async () => {
  try {
    const { data } = await api.get("/pets")
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOnePet = async (id) => {
  try {
    const { data } = await api.get(`/pets/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOwnPets = async () => {
  try {
    const { data } = await api.get("/pets/me")
    return data
  } catch (error) {
    console.log(error)
  }
}

const createOwnPet = async (body) => {
  try {
    const { data } = await api.post("/pets/me",body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const createPet = async (body) => {
  try {
    const { data } = await api.post("/pets",body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateOwnPet = async (id,body) => {
  try {
    const { data } = await api.put(`/pets/me/${id}`,body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const updatePet = async (id,body) => {
  try {
    const { data } = await api.put(`/pets/${id}`,body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteOwnPet = async (id) => {
  try {
    const { data } = await api.delete(`/pets/me/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deletePet = async (id) => {
  try {
    const { data } = await api.delete(`/pets/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getAllPets, getOnePet, getOwnPets, createOwnPet, createPet, updateOwnPet, updatePet, deleteOwnPet, deletePet  }

