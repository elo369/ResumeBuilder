import axios from "axios"

// let DB_ROUTES = import.meta.env.VITE_DB_ROUTE

let axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_DB_ROUTE,
    withCredentials:true,
    headers: { "Content-Type": "application/json" },
})

export default axiosInstance