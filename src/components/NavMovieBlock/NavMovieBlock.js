import React from 'react';
import { Link } from "react-router-dom";
import accountLogo from "../../images/account-icon.svg";
import './NavMovieBlock.css';

const NavMovieBlock = () => {
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
        </>
    );
};

export default NavMovieBlock;