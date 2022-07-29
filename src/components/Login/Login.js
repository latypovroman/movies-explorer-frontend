import React, { useEffect } from 'react';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Login.css';
import { useFormWithValidation } from "../../hooks/useValidation";

const Login = ({ handleLogin }) => {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password } = values;
        handleLogin(email, password);
    }


    return (
        <div className="sign">
            <div className="sign__container">
                <img className="sign__logo" src={logo} alt="Логотип"/>
                <h2 className="sign__title">Рады видеть!</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form__description">E-mail</p>
                    <
                        input
                        onChange={handleChange}
                        className="form__input"
                        type="email"
                        name="email"
                        required
                        value={values.email || ''}
                    />
                    <p className="form__error-text" id="email-error">{errors.email || ''}</p>
                    <p className="form__description">Пароль</p>
                    <
                        input
                        onChange={handleChange}
                        className="form__input form__input_error"
                        type="password"
                        name="password"
                        value={values.password || ''}
                        minLength="2"
                        maxLength="30"
                        required
                    />
                    <p className="form__error-text" id="password-error">{errors.password || ''}</p>
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="form__button form__button_type_login">
                        Войти
                    </button>
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