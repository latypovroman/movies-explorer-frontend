import React, { useEffect } from 'react';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Register.css';
import { useFormWithValidation } from "../../hooks/useValidation";

const Register = ({ handleRegister }) => {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleRegister(values);
    }

    return (
        <div className="sign">
            <div className="sign__container">
                <img className="sign__logo" src={logo} alt="Логотип"/>
                <h2 className="sign__title">Добро пожаловать!</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form__description">Имя</p>
                    <
                        input className="form__input"
                           type="text"
                           name="name"
                           required
                           onChange={handleChange}
                           value={values.name || ''}
                           minLength="2"
                           maxLength="30"
                    />
                    <p className="form__error-text" id="name-error">{errors.name || ''}</p>
                    <p className="form__description">E-mail</p>
                    <
                        input className="form__input"
                           type="email"
                           name="email"
                           required
                           onChange={handleChange}
                           value={values.email || ''}
                    />
                    <p className="form__error-text" id="name-error">{errors.email || ''}</p>
                    <p className="form__description">Пароль</p>
                    <
                        input className="form__input"
                              type="password"
                              name="password"
                              required
                              onChange={handleChange}
                              value={values.password || ''}
                              minLength="2"
                              maxLength="30"
                    />
                    <p className="form__error-text" id="name-error">{errors.password || ''}</p>
                    <button
                        type="submit"
                        className="form__button"
                        disabled={!isValid}>
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