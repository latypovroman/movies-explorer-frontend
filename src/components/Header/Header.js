import React from 'react';
import logo from '../../images/logo.svg';
import accountLogo from '../../images/account-icon.svg';
import './Header.css';
import {Link, Route, Switch, useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();
    return (
        <header className={
            location.pathname === '/'
                ? 'header header__about'
                : 'header header__main'
        }>
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__routes">
                <Switch>
                    <Route exact path="/">
                        <button className="header__registration">Регистрация</button>
                        <button className="header__login">Войти</button>
                    </Route>
                    <Route path={["/movies", "/saved-movies"]}>
                        <div className="header__movies">
                            <Link to="/movies" className="header__link">Фильмы</Link>
                            <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
                        </div>
                        <div className="header__profile">
                            <Link to="/profile" className="header__link">Аккаунт</Link>
                            <img className="header__profile-logo" src={accountLogo}/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </header>
    );
};

export default Header;