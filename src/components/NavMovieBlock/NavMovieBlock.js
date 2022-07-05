import React from 'react';
import { NavLink } from "react-router-dom";
import './NavMovieBlock.css';
import burger from '../../images/burger-icon.svg';
import accountLogo from "../../images/account-icon.svg";


const NavMovieBlock = ({ switchBurger }) => {
    return (
        <>
            <div className="nav-movie__movies">
                <NavLink to="/movies" className="nav-movie__link">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="nav-movie__link">Сохранённые фильмы</NavLink>
            </div>
            <div className="nav-movie__profile">
                <NavLink to="/profile" className="nav-movie__link">Аккаунт</NavLink>
                <img className="nav-movie__profile-logo" src={accountLogo} alt="Логотип"/>
            </div>
            <button className="nav-movie__burger-menu" onClick={switchBurger}>
                <img className="nav-movie__burger-icon" src={burger} alt="Иконка меню"/>
            </button>
        </>
    );
};

export default NavMovieBlock;