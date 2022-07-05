import React from 'react';
import './Portfolio.css';
import linkArrow from '../../images/link-arrow.svg'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__inner">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <a
                            className="portfolio__link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://latypovroman.github.io/YAPhow-to-learn/">
                            Статичный сайт
                        </a>
                        <img className="portfolio__arrow" src={linkArrow} alt="Стрелочка-ссылка"/>
                    </li>
                    <li className="portfolio__item">
                        <a
                            className="portfolio__link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://latypovroman.github.io/russian-travel/">
                            Адаптивный сайт
                        </a>
                        <img className="portfolio__arrow" src={linkArrow} alt="Стрелочка-ссылка"/>
                    </li>
                    <li className="portfolio__item">
                        <a
                            className="portfolio__link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://mesto.app.nomoredomains.sbs/">
                            Одностраничное приложение
                        </a>
                        <img className="portfolio__arrow" src={linkArrow} alt="Стрелочка-ссылка"/>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Portfolio;