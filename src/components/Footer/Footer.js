import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__year">© 2022</p>
                <nav className="footer__navigation">
                    <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/latypovroman">Github</a>
                    <a className="footer__link" href="https://t.me/Elromano">Telegram</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;