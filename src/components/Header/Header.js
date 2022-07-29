import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import { Route, Routes, useLocation } from "react-router-dom";
import NavMovieBlock from "../NavMovieBlock/NavMovieBlock";
import NavAuthBlock from "../NavAuthBlock/NavAuthBlock";
import Burger from "../Burger/Burger";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = () => {

    const auth = useContext(CurrentUserContext);
    const location = useLocation();
    const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

    const switchBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    const headerBG = () => location.pathname === '/' ? 'header header__about' : 'header header__main'; // Меняет фон на разных роутах
    const flexType = () => location.pathname === '/' && !auth.email ? 'header__routes header__routes_about' : 'header__routes header__routes_main'; // Меняет расположение навигации на разных роутах

    const checkUserForRender = () => {
        return auth.email && auth.name
            ? <Route path='*' element={<NavMovieBlock isBurgerOpen={isBurgerOpen} switchBurger={switchBurger}/>}/>
            : <Route path="/" element={<NavAuthBlock/>}/>
    }

    return (
        <header className={headerBG()}>
            <div className="header__container">
                <img className="header__logo" src={logo} alt="logo"/>
                <div className={flexType()}>
                    <Routes>
                        { checkUserForRender() }
                    </Routes>
                </div>
            </div>
            <Burger isBurgerOpen={isBurgerOpen} switchBurger={switchBurger}/>
        </header>
    );
};

export default Header;