import axios from 'axios'
import { API_VERSION } from '../constants/API'

const api = axios.create({
  baseURL: `http://localhost:3333/api/${API_VERSION}`,
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
})

export default api