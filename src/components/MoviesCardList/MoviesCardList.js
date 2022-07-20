import React from 'react';
import Card from "../Card/Card";
import './MoviesCardList.css'

const MoviesCardList = ({ movieList, addSavedMovie, savedMovies, deleteSavedMovie }) => {

    const isSaved = ((movie) => {
        return savedMovies.find(saved => {
            return saved.movieId === movie.id
        })
    })


    return (
        <section className="cards">
            <div className="cards__inner">
                <ul className="card-list">
                    {
                        movieList.map((movie) =>
                        <Card
                            isSaved={isSaved(movie)}
                            movie={movie}
                            key={movie.id}
                            saveMovie={addSavedMovie}
                            deleteMovie={deleteSavedMovie}
                        />)
                    }
                </ul>
                <button className="card-list__more">Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;