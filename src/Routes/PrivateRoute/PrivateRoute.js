import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../pages/contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <button className="btn loading">loading</button>
    }

    if (user) {
        return children;

    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;