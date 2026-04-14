import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token && config.headers) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default axiosInstance;

// import axios from 'axios';
// import { authService } from './services/authService';

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:3000',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// axiosClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('accessToken');
//         if (token && config.headers) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// const onRefreshed = (token: string) => {
//     refreshSubscribers.map((callback) => callback(token));
//     refreshSubscribers = [];
// };

// const addRefreshSubscriber = (callback: (token: string) => void) => {
//     refreshSubscribers.push(callback);
// };

// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             const refreshToken = localStorage.getItem('refreshToken');

//             if (!refreshToken) {
//                 window.location.href = '/login';
//                 return Promise.reject(error);
//             }

//             if (!isRefreshing) {
//                 isRefreshing = true;

//                 try {
//                     const { accessToken } = await authService.refreshToken(refreshToken);

//                     localStorage.setItem('accessToken', accessToken);
//                     isRefreshing = false;

//                     onRefreshed(accessToken);

//                     originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//                     return axiosClient(originalRequest);

//                 } catch (refreshError) {
//                     isRefreshing = false;
//                     localStorage.removeItem('accessToken');
//                     localStorage.removeItem('refreshToken');
//                     window.location.href = '/login';
//                     return Promise.reject(refreshError);
//                 }
//             }

//             return new Promise((resolve) => {
//                 addRefreshSubscriber((newToken) => {
//                     originalRequest.headers.Authorization = `Bearer ${newToken}`;
//                     resolve(axiosClient(originalRequest));
//                 });
//             });
//         }

//         return Promise.reject(error);
//     }
// );

// export default axiosClient;