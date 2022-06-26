import React from 'react';
import Card from "../Card/Card";
import './MoviesCardList.css'

const MoviesCardList = () => {

    return (
        <section className="cards">
            <ul className="card-list">
                {[...Array(16)].map((card) => <Card/>)}
            </ul>
            <button className="card-list__more">Ещё</button>
        </section>
    );
};

export default MoviesCardList;