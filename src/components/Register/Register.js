import React from 'react';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Register.css';
import SignInput from "../SignInput/SignInput";

const Register = ({ handleRegister }) => {

    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
        name: '',
    })

    const handleDataChange = (evt) => {
        setUserData({
            ...userData,
            [evt.target.name]: evt.target.value
        })
        console.log(userData)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleRegister(userData)
    }

    return (
        <div className="sign">
            <div className="sign__container">
                <img className="sign__logo" src={logo} alt="Логотип"/>
                <h2 className="sign__title">Добро пожаловать!</h2>
                <form className="form">
                    <p className="form__description">Имя</p>
                    <SignInput handleDataChange={handleDataChange} type="name"/>
                    <p className="form__description">E-mail</p>
                    <SignInput handleDataChange={handleDataChange} type="email"/>
                    <p className="form__description">Пароль</p>
                    <SignInput handleDataChange={handleDataChange} type="password"/>
                    {/*<input className="form__input" type="text" required onClick={handleDataChange}/>*/}
                    {/*<p className="form__error-text" id="name-error"></p>*/}
                    {/*<input className="form__input" type="email" required onClick={handleDataChange}/>*/}
                    {/*<p className="form__error-text" id="email-error"></p>*/}
                    {/*<input className="form__input form__input_error" type="password" required onClick={handleDataChange}/>*/}
                    {/*<p className="form__error-text form__error-text_active" id="password-error">Что-то пошло не так...</p>*/}
                    <button
                        className="form__button"
                        onClick={handleSubmit}>
                        Зарегистрироваться
                    </button>
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