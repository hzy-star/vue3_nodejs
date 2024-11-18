import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api/auth', // 替换为实际 API 地址
  timeout: 5000,
  withCredentials: true, // 允许携带凭据
  headers: {
    'Content-Type': 'application/json',  // 确保请求头设置为 JSON 格式
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// 通用请求方法，不限定 GET/POST，可以传递 method
export const request = <T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: object
  ): Promise<T> => {
    return instance.request({
      method,
      url,
      ...(method === 'GET' ? { params: data } : { data }), // GET请求使用 params，其余使用 data
    });
  };
export default instance;
