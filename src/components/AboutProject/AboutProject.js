import React from 'react';
import './AboutProject.css'

const AboutProject = () => {
    return (
        <section className="project">
            <h2 className="project__title">О проекте</h2>
            <div className="project__container">
                <div className="project__text">
                    <p className="project__description project__description_short">Дипломный проект включал 5 этапов</p>
                    <p className="project__description project__description_short">На выполнение диплома ушло 5 недель</p>
                    <p className="project__description project__description_detail">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p className="project__description project__description_detail">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className="project__visual">
                    <div className="project__visual-bar project__visual-bar_backend">
                        1 неделя
                    </div>
                    <div className="project__visual-bar project__visual-bar_frontend">
                        4 недели
                    </div>
                    <p className="project__visual-description">Back-end</p>
                    <p className="project__visual-description">Front-end</p>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;