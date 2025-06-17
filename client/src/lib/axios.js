import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
    withCredentials: true, // Enabling the sending of credentials (such as cookies) with cross-origin requests
})

export default axiosInstance;