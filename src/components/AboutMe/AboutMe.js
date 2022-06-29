import React from 'react';
import photo from '../../images/photo.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className="me">
            <div className="me__inner">
                <h2 className="me_title">Студент</h2>
                <div className="me_container">
                    <div className="me__about">
                        <p className="me__name">Роман</p>
                        <p className="me__profession">Фронтенд-разработчик, 33 года</p>
                        <p className="me__description">
                            Я родился и живу в Уфе. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё учиться новому.
                            Год назад начал изучать фронтенд и делаю шаги к тому, чтобы стать ценным специалистом.
                            В данный момент нахожусь в поиске работы.
                        </p>
                        <ul className="me__social">
                            <li><a className="me__social-link" href="https://github.com/latypovroman">Github</a></li>
                            <li><a className="me__social-link" href="https://t.me/Elromano">Telegram</a></li>
                        </ul>
                    </div>
                    <img className="me__photo" src={photo} alt="Роман Латыпов"/>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;