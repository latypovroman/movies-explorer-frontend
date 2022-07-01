import React from 'react';
import { Link } from "react-router-dom";
import './Burger.css';
import burgerClose from '../../images/burger-icon-opened.svg';
import accountLogo from "../../images/account-icon.svg";

const Burger = ({ isBurgerOpen, switchBurger }) => {
    return (
        <div className={ isBurgerOpen ? "burger burger_opened" : "burger" }>
            <button className="burger__close-button" onClick={switchBurger}>
                <img className="burger__close-icon" src={burgerClose} alt="Иконка закрытия меню"/>
            </button>
            <div className="burger__nav-container">
                <Link to="/" className="burger__link">Главная</Link>
                <Link to="/movies" className="burger__link">Фильмы</Link>
                <Link to="/saved-movies" className="burger__link">Сохранённые фильмы</Link>
                <div className="burger__profile">
                    <Link to="/profile" className="burger__link">Аккаунт</Link>
                    <img className="burger__profile-logo" src={accountLogo} alt="Логотип"/>
                </div>
            </div>
        </div>
    );
};

export default Burger;