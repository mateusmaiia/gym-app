import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.30.66:3333',
})
