import axios from "axios";
import config from "../Config/Config";

const api = axios.create({
    baseURL : config.apiUrl,
    headers : {
        "Content-Type" : "application/json",
    },
});

api.interceptors.request.use((request) => {
    const token = localStorage.getItem(config.tokenKey);
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});
export default api;