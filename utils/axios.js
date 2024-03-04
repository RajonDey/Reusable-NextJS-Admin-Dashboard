import axios from "axios";
const userToken =
  typeof window !== "undefined" ? localStorage.getItem("userToken") : null;

const api_url = process.env.NEXT_PUBLIC_API_URL;
export const axiosSecure = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${userToken}`,
  },
});

// Create a new instance for your local server
export const axiosLocal = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const axiosOpen = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const axiosSecureInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});
export const axiosNonSecureInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

axiosSecureInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.userToken
      ? localStorage.getItem("userToken")
      : null;
    config.headers.Authorization = `Bearer ${userToken}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
