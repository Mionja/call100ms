import axios from "axios";

// const baseURL = process.env.REACT_APP_BACKEND_API_URI;
const baseURL = "http://localhost:5000/api"

const instance = axios.create({
  baseURL: baseURL,
});

const token = localStorage.getItem("jwt");

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
