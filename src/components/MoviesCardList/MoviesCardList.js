import React from 'react';
import Card from "../Card/Card";
import './MoviesCardList.css'

const MoviesCardList = ({ movieList, handleSaveCard, addSavedMovie, handleSaveImage }) => {

    return (
        <section className="cards">
            <div className="cards__inner">
                <ul className="card-list">
                    {
                        movieList.map((movie) =>
                        <Card
                            movie={movie}
                            key={movie.id}
                            handleSave={handleSaveCard}
                            saveMovie={addSavedMovie}
                            handleImage={handleSaveImage}
                        />)
                    }
                </ul>
                <button className="card-list__more">Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;