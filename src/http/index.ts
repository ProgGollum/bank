import axios from 'axios'

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
})

export default $api;