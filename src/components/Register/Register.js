import React from 'react';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
    return (
        <div className="sign">
            <div className="sign__container">
                <img src={logo} alt="Логотип"/>
                <h2 className="sign__title">Добро пожаловать!</h2>
                <form className="form">
                    <p className="form__description">Имя</p>
                    <input className="form__input" type="text" required/>
                    <p className="form__error-text" id="name-error"></p>
                    <p className="form__description">E-mail</p>
                    <input className="form__input" type="email" required/>
                    <p className="form__error-text" id="email-error"></p>
                    <p className="form__description">Пароль</p>
                    <input className="form__input form__input_error" type="password" required/>
                    <p className="form__error-text form__error-text_active" id="password-error">Что-то пошло не так...</p>
                    <button className="form__button">Зарегистрироваться</button>
                </form>
                <p className="sign__redirect-text">
                    Уже зарегистрированы?
                    <Link to="/signin" className="sign__redirect-link">Войти</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;