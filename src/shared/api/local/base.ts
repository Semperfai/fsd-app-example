import axios from 'axios'
import { config } from '@/shared/lib'

export const apiInstance = axios.create({
  baseURL: config.API_ENDPOINT
})
