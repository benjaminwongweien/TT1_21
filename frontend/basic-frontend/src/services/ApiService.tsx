import axios, { AxiosResponse } from "axios";
import { env } from "../env";

const apiInstance = axios.create({
  baseURL: env.api.url,
  headers: { 'Content-Type': 'application/json' }
});

apiInstance.interceptors.request.use(config => {
  if (!!sessionStorage.getItem('token')) {
    config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')!;
  }
  return config;
})

export class ApiService {
  async get<T>(url: string) {
    try {
      const { data } = await apiInstance.get<AxiosResponse<T>>(url);
      return data;
    } catch (err: any) {
      throw err.response.data.error;
    }
  }

  async post<T>(url: string, req?: Record<string, any>) {
    try {
      const { data } = await apiInstance.post<AxiosResponse<T>>(url, req);
      return data;
    } catch (err: any) {
      throw err.response.data.error;
    }
  }

  async patch<T>(url: string, req?: Record<string, any>) {
    try {
      const { data } = await apiInstance.patch<AxiosResponse<T>>(url, req);
      return data;
    } catch (err: any) {
      throw err.response.data.error;
    }
  }

  async put<T>(url: string, req?: Record<string, any>) {
    try {
      const { data } = await apiInstance.put<AxiosResponse<T>>(url, req);
      return data;
    } catch (err: any) {
      throw err.response.data.error;
    }
  }
}
