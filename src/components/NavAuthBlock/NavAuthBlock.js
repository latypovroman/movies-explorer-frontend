import React from 'react';
import './NavAuthBlock.css';

const NavAuthBlock = () => {
    return (
        <div className="nav-auth">
            <button className="nav-auth__registration">Регистрация</button>
            <button className="nav-auth__login">Войти</button>
        </div>
    );
};

export default NavAuthBlock;