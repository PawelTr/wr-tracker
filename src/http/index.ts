import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:4000'

const $api = axios.create({
  baseURL: API_URL,
})

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  }
  return config;
})

export default $api;