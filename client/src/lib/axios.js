import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true, // Enabling the sending of credentials (such as cookies) with cross-origin requests
})

export default axiosInstance;