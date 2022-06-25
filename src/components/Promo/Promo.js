import React from 'react';
import landingImage from '../../images/landing_img.svg'
import './Promo.css'

const Promo = () => {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__image" src={landingImage} alt="Абстрактная картинка"/>
        </section>
    );
};

export default Promo;