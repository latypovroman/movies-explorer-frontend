import React from 'react';
import { Link } from "react-router-dom";
import './NavMovieBlock.css';
import burger from '../../images/burger-icon.svg';
import accountLogo from "../../images/account-icon.svg";


const NavMovieBlock = ({ switchBurger }) => {
    return (
        <>
            <div className="nav-movie__movies">
                <Link to="/movies" className="nav-movie__link">Фильмы</Link>
                <Link to="/saved-movies" className="nav-movie__link">Сохранённые фильмы</Link>
            </div>
            <div className="nav-movie__profile">
                <Link to="/profile" className="nav-movie__link">Аккаунт</Link>
                <img className="nav-movie__profile-logo" src={accountLogo} alt="Логотип"/>
            </div>
            <button className="nav-movie__burger-menu" onClick={switchBurger}>
                <img className="nav-movie__burger-icon" src={burger} alt="Иконка меню"/>
            </button>
        </>
    );
};

export default NavMovieBlock;