import config from "@/config";
import type { AxiosInstance } from "axios";
import axios from "axios";
import { ElMessage } from "element-plus";

const NECTWORK_ERROR = "网络异常，请稍后重试";
interface optionsI {
  method: string;
  url: string;
  data?: unknown;
  params?: unknown;
}
export interface ResType<T> {
  code: number;
  data?: T;
  message: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: config.baseUrl,
  timeout: 8000,
});

// 请求拦截
instance.interceptors.request.use((config) => {
  const headers = config.headers;
  if (!headers.Authorization) {
    headers.Authorization = "Bearer " + localStorage.getItem("token"); //jwt
  }
  return config;
});
// 响应拦截
instance.interceptors.response.use((response) => {
  const { code, message } = response.data;
  if (code === 200) {
    response.data;
  }
  // 账号密码错误
  else if (code === 20001) {
    ElMessage.error(message);
    return Promise.reject(message);
  } else {
    ElMessage.error(message || NECTWORK_ERROR);
    return Promise.reject(message || NECTWORK_ERROR);
  }
  return response;
});

function request<T>(options: optionsI): Promise<ResType<T>> {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data || {};
  }

  if (config.env === "prod") {
    instance.defaults.baseURL = config.baseUrl;
  } else {
    instance.defaults.baseURL = config.mock ? config.mockUrl : config.baseUrl;
  }
  return instance(options);
}

// ["get", "post", "put", "delete"].forEach((method: string) => {
//   request[method] = (url: string, data?: unknown) => {
//     return request({
//       method,
//       url,
//       data,
//     });
//   };
// });

export default request;
