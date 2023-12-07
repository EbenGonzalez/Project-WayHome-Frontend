import api from "./config"

const getAllHistories = async () => {
  try {
    const { data } = await api.get("/history")
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOwnHistory = async () => {
  try {
    const { data } = await api.get(`/history/me`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOneOwnHistory = async (id) => {
  try {
    const { data } = await api.get(`/history/me/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOneHistory = async (id) => {
  try {
    const { data } = await api.get(`/history/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const createHistory = async (body) => {
  try {
    const { data } = await api.post("/history",body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const createOwnHistory = async (body) => {
  try {
    const { data } = await api.post("/history/me",body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateOwnHistory = async (id,body) => {
  try {
    const { data } = await api.put(`/history/me/${id}`,body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateHistory = async (id,body) => {
  try {
    const { data } = await api.put(`/history/${id}`,body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteHistory = async (id) => {
  try {
    const { data } = await api.delete(`/history/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getAllHistories, getOneOwnHistory, getOwnHistory,getOneHistory, createHistory,createOwnHistory, updateOwnHistory, updateHistory, deleteHistory, deleteHistory  }