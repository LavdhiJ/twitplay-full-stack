import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL + "/api/v1";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
