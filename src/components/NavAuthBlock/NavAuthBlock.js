import React from 'react';
import './NavAuthBlock.css';
import { Link } from "react-router-dom";

const NavAuthBlock = () => {
    return (
        <div className="nav-auth">
            <Link to="/signup" className="nav-auth__registration">Регистрация</Link>
            <Link to="/signin" className="nav-auth__login">Войти</Link>
        </div>
    );
};

export default NavAuthBlock;