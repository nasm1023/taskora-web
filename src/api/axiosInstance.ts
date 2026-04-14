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

// axiosInstance.interceptors.response.use(
//     (response) => response.data,
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             console.error("Token không hợp lệ hoặc hết hạn. Đang đăng xuất...");

//             localStorage.removeItem('token');

//             window.location.href = '/login';
//         }
//         return Promise.reject(error);
//     }
// );

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default axiosInstance;