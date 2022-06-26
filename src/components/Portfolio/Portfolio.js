import React from 'react';
import './Portfolio.css';
import linkArrow from '../../images/link-arrow.png'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://latypovroman.github.io/YAPhow-to-learn/">Статичный сайт</a>
                    <img className="portfolio__arrow" src={linkArrow} alt="Стрелочка-ссылка"/>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://latypovroman.github.io/russian-travel/">Адаптивный сайт</a>
                    <img className="portfolio__arrow" src={linkArrow} alt="Стрелочка-ссылка"/>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://mesto.app.nomoredomains.sbs/">Одностраничное приложение</a>
                    <img className="portfolio__arrow" src={linkArrow} alt="Стрелочка-ссылка"/>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;