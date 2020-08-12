import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000/api"
})

export async function fetchEvents() {
  const response = await api.get('/events')
  const data = response.data.events
  return data
}