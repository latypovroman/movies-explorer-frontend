import React from 'react';
import Card from "../Card/Card";
import './MoviesCardList.css'

const MoviesCardList = ({ movieList }) => {

    return (
        <section className="cards">
            <div className="cards__inner">
                <ul className="card-list">
                    {
                        movieList.map((movie, index) =>
                        <Card movie={movie} key={ index }/>)
                    }
                </ul>
                <button className="card-list__more">Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;