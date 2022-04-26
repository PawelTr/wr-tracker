import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:4000'

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('WRAccessToken')}`
  }
  return config;
})

export default $api;