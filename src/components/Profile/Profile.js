import React from 'react';
import './Profile.css';

const Profile = ({ signOut }) => {
    return (
        <section className="profile">
            <p className="profile__greeting">Привет, username!</p>
            <div className="profile__info">
                <div className="profile__block">
                    <p className="profile__text">Имя</p>
                    <p className="profile__text">username</p>
                </div>
                <div className="profile__block">
                    <p className="profile__text">E-mail</p>
                    <p className="profile__text">pochta@yandex.ru</p>
                </div>
            </div>
            <div className="profile__buttons">
                <span className="profile__buttons-error">При обновлении профиля произошла ошибка.</span>
                <button className="profile__button profile__button_edit">Редактировать</button>
                <button
                    onClick={signOut}
                    className="profile__button profile__button_logout">
                    Выйти из аккаунта
                </button>
            </div>
        </section>
    );
};

export default Profile;