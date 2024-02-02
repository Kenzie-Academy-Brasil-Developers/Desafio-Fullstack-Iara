import axios from "axios";

const baseURL = "https://clients-deploy.onrender.com/";

export const api = axios.create({
    baseURL: baseURL,
    timeout: 8 * 1000,
    withCredentials: true,
});