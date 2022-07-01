import React from 'react';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    return (
        <div className="sign">
            <div className="sign__container">
                <img src={logo} alt="Логотип"/>
                <h2 className="sign__title">Рады видеть!</h2>
                <form className="form">
                    <p className="form__description">E-mail</p>
                    <input className="form__input" type="email" required/>
                    <p className="form__error-text" id="email-error"></p>
                    <p className="form__description">Пароль</p>
                    <input className="form__input form__input_error" type="password" required/>
                    <p className="form__error-text" id="password-error"></p>
                    <button className="form__button form__button_type_login">Зарегистрироваться</button>
                </form>
                <p className="sign__redirect-text">
                    Ещё не зарегистрированы?
                    <Link to="/signup" className="sign__redirect-link">Регистрация</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;