import React, { useContext } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { email, name } = useContext(CurrentUserContext);
    const location = useLocation();

    if (!email || !name) {
        if (location.pathname === '/movies'
            || location.pathname === '/saved-movies'
            || location.pathname === '/profile') {
            return <Navigate to='/signin'/>
        }
    }
    return children;
};

export default PrivateRoute;