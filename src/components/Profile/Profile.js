import React, {useContext, useEffect} from 'react';
import './Profile.css';
import { useFormWithValidation } from "../../hooks/useValidation";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

const Profile = ({ signOut, changeProfileInfo }) => {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const auth = useContext(CurrentUserContext);

    useEffect(() => {
        if (auth) {
            resetForm(auth, {}, true);
        }
    }, [auth, resetForm]);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        changeProfileInfo(values);
    }

    const checkDisable = () => !isValid || (auth.name === values.name && auth.email === values.email);

    return (
        <section className="profile">
            <p className="profile__greeting">Привет, {auth.name}</p>
            <form className="profile__info" onSubmit={handleSubmit}>
                <div className="profile__block">
                    <p className="profile__text">Имя</p>
                    <input
                        className="profile__input"
                        type="text"
                        name="name"
                        value={values.name || ''}
                        onChange={handleChange}
                        maxLength="30"
                        minLength="2"
                    />
                    <p className="profile__text">E-mail</p>
                    <input
                        className="profile__input"
                        type="email"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="profile__buttons">
                    <span className="profile__buttons-error">
                        {errors.name || errors.email || ''}
                    </span>
                    <button
                        type="submit"
                        disabled={checkDisable()}
                        className="profile__button profile__button_edit">
                        Редактировать
                    </button>
                    <button
                        onClick={signOut}
                        type="button"
                        className="profile__button profile__button_logout">
                        Выйти из аккаунта
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Profile;