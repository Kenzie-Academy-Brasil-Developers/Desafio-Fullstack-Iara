import axios from "axios";

const baseURL = "http://localhost:3000";

export const api = axios.create({
    baseURL: baseURL,
    timeout: 8 * 1000,
    withCredentials: true,
});