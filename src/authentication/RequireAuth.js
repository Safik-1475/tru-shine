import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const user = false;
    if (!user) {
        return <Navigate path='/login' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;