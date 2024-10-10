import axios, { AxiosRequestConfig } from "axios";
import { axiosClientInstance } from "./axios-instance";

// const getAuthToken = () => localStorage.getItem("REACT_TOKEN_AUTH");

export const get = async <T>({
  endpoint,
  queryParams,
  options,
}: {
  endpoint: string;
  queryParams: Record<string, unknown>;
  options: AxiosRequestConfig<any> | undefined;
}) => {
  const res = await axiosClientInstance.get<T>(`/api${endpoint}`, {
    params: queryParams,
    ...options,
  });
  return res.data;
};

export const post = async <T>({
  endpoint,
  body,
  options,
}: {
  endpoint: string;

  options: AxiosRequestConfig<any> | undefined;
  body: any;
}) => {
  const res = await axios.post<T>(`api${endpoint}`, body, {
    ...options,
  });
  return res.data;
};

export const patch = async <T>({
  endpoint,
  body,
  options,
}: {
  endpoint: string;
  options: AxiosRequestConfig<any> | undefined;
  body: any;
}) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${getAuthToken()}`;
  const res = await axios.patch<T>(`api${endpoint}`, body, {
    ...options,
  });
  return res.data;
};

export const put = async <T>({
  endpoint,
  options,
  body,
}: {
  endpoint: string;
  options: AxiosRequestConfig<any> | undefined;
  body: any;
}) => {
  const res = await axios.put<T>(`api${endpoint}`, body, {
    ...options,
  });
  return res.data;
};

export const del = async ({ endpoint }: { endpoint: string }) => {
  const res = await axios.delete(`api${endpoint}`);
  return res.data;
};
