import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

const hasUserId = !!localStorage.getItem('userId');

const initialState: AuthState = {
    user: null,
    isAuthenticated: hasUserId,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('userId');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;