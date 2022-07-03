import React from 'react';
import { NavLink } from "react-router-dom";
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
                <NavLink to="/" className="burger__link">Главная</NavLink>
                <NavLink to="/movies" className="burger__link">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="burger__link">Сохранённые фильмы</NavLink>
                <div className="burger__profile">
                    <NavLink to="/profile" className="burger__link">Аккаунт</NavLink>
                    <img className="burger__profile-logo" src={accountLogo} alt="Логотип"/>
                </div>
            </div>
        </div>
    );
};

export default Burger;