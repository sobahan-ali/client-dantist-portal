import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../pages/contexts/AuthProvider';
import Loading from '../../pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;

    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;