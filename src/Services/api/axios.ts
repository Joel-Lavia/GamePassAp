import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    // "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
