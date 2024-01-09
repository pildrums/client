import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.tmbservice.net/";

const instanceConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const instance = axios.create(instanceConfig);
