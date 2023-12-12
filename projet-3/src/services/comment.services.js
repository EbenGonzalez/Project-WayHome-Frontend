import api from "./config"

const getAllComments = async () => {
  try {
    const { data } = await api.get("/comment")
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOneComment = async (id) => {
  try {
    const { data } = await api.get(`/comment/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const getInboxComments = async () => {
  try {
    const { data } = await api.get("/comment/inbox")
    return data
  } catch (error) {
    console.log(error)
  }
}

const getSendComments = async () => {
  try {
    const { data } = await api.get("/comment/send")
    return data
  } catch (error) {
    console.log(error)
  }
}

const createComment = async (body) => {
  try {
    const { data } = await api.post("/comment",body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const sendComment = async (body) => {
  try {
    const { data } = await api.post("/comment/me",body,
    {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateOwnComment = async (id,body) => {
  try {
    const { data } = await api.put(`/comment/me/${id}`,body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const updateComment = async (id,body) => {
  try {
    const { data } = await api.put(`/comment/${id}`,body)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteOwnComment = async (id) => {
  try {
    const { data } = await api.delete(`/comment/me/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteComment = async (id) => {
  try {
    const { data } = await api.delete(`/comment/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getAllComments, getOneComment, getInboxComments,getSendComments, createComment,sendComment, updateOwnComment, updateComment, deleteOwnComment, deleteComment  }
