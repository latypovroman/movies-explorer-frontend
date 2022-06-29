import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import { Route, Routes, useLocation } from "react-router-dom";
import NavMovieBlock from "../NavMovieBlock/NavMovieBlock";
import NavAuthBlock from "../NavAuthBlock/NavAuthBlock";

const Header = () => {

    const location = useLocation();

    const headerBG = () => location.pathname === '/' ? 'header header__about' : 'header header__main'; // Меняет фон на разных роутах
    const flexType = () => location.pathname === '/' ? 'header__routes header__routes_about' : 'header__routes header__routes_main'; // Меняет расположение навигации на разных роутах

    return (
        <header className={headerBG()}>
            <div className="header__container">
                <img className="header__logo" src={logo} alt="logo"/>
                <div className={flexType()}>
                    <Routes>
                        <Route path="/" element={ <NavAuthBlock/> }/>
                        <Route path="/movies" element={ <NavMovieBlock/> }/>
                        <Route path="/saved-movies" element={ <NavMovieBlock/> }/>
                        <Route path="/profile" element={ <NavMovieBlock/> }/>
                    </Routes>
                </div>
            </div>
        </header>
    );
};

export default Header;