import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <section className="not-found">
            <h2 className="not-found__error-number">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button className="not-found__back-button" onClick={goBack}>Назад</button>
        </section>
    );
};

export default NotFound;