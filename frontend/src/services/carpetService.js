javascript
import axios from 'axios'

const API_URL = `${import.meta.env.VITE_API_URL}/carpets`

export const getAllCarpets = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const getCarpetById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

export const createCarpet = async (formData) => {
  const data = new FormData()
  data.append('title', formData.title)
  data.append('price', formData.price)
  data.append('description', formData.description)
  if (formData.image) {
    data.append('image', formData.image)
  }

  const response = await axios.post(API_URL, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return response.data
}

export const updateCarpet = async (id, formData) => {
  const data = new FormData()
  data.append('title', formData.title)
  data.append('price', formData.price)
  data.append('description', formData.description)
  if (formData.image) {
    data.append('image', formData.image)
  }

  const response = await axios.put(`${API_URL}/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return response.data
}
