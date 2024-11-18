// src/api.ts
import { request } from '@/axios/axios';
// 示例：获取用户信息，不固定请求方法
export const permissions = <T>( method:any,userId: number) => {
    return request<T>(method, `/permissions/${userId}`);
};

// 示例：用户登录
export const login = <T>(method: 'GET' | 'POST' = 'POST',data: { username: string; password: string }) => {
    return request<T>(method, '/login', data);
};

// 示例：注册新用户
export const register = <T>(method: 'GET' | 'POST' = 'POST' , data: { username: string; password: string; role: string }) => {
    return request<T>(method, '/auth/register', data);
};

// 其他 API 方法可以继续在此定义...
