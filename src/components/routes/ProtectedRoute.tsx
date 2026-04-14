import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../../store';
import { useAppSelector } from '../../store/hooks';

export const ProtectedRoute = () => {
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};