import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__auth">
                <button className="header__registration">Регистрация</button>
                <button className="header__login">Войти</button>
            </div>
        </header>
    );
};

export default Header;