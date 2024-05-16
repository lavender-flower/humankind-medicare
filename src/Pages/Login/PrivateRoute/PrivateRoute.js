import React from 'react';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} =useAuth();
    if(isLoading){
return <div className="spinner-border text-light m-5" role="status">
<span className="visually-hidden">Loading...</span>
</div>
    }
    return user.email? <Outlet /> : <Navigate to="/login" />;
    
};

export default PrivateRoute;