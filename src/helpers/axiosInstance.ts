import axios from "axios";
import { getAuthSession } from "./getSession";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Ensure this is set in your .env file
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(process.env.NEXT_PUBLIC_BASE_URL);

// Add a request interceptor to include the auth token from cookies
axiosInstance.interceptors.request.use(
  async (config) => {
    const cookieStore = await getAuthSession();
    const authToken = cookieStore;

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
