import React, { useContext } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {useLocation, useNavigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const auth = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        if (!auth.id) {
            if (location.pathname === '/movies'
                || location.pathname === '/saved-movies'
                || location.pathname === '/profile') {
                navigate('/signin');
            }
        }
    }, [auth]);


    return children;

};

export default PrivateRoute;