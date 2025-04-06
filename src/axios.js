import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // Update this with your Django backend URL if needed
  withCredentials: true,
});

export default instance;
