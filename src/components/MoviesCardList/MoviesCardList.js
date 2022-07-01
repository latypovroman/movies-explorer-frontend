import React from 'react';
import Card from "../Card/Card";
import './MoviesCardList.css'

const MoviesCardList = () => {

    return (
        <section className="cards">
            <div className="cards__inner">
                <ul className="card-list">
                    {[...Array(16)].map((card, index) => <Card key={ index }/>)}
                </ul>
                <button className="card-list__more">Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;