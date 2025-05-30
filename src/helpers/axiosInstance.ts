import axios from "axios";

const session = async () => {
  const res = await fetch("/api/auth/session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  return data?.user || null;
};

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
    const user = await session();

    if (user && user.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
