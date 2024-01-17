import _axios, { type AxiosResponse } from 'axios'
import { useAuthStore } from '@/store'

export const axios = _axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
})

axios.interceptors.request.use(
  (config) => {
    const token = useAuthStore().token
    if (token)
      config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200)
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)
