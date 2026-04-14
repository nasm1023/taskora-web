import axios from 'axios';

const API_URL = 'http://localhost:3000' // .env;

export const authService = {
    login: async (email: string, password: string) => {
        const response = await axios.get(`${API_URL}/users`, {
            params: {
                email: email,
                password: password
            }
        });

        const users = response.data;
        if (users.length === 0) {
            throw new Error("Sai thông tin đăng nhập");
        }
        return users[0];
    }
};