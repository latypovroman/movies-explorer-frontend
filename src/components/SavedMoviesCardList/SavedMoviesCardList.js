import React, { useEffect } from 'react';
import Card from "../Card/Card";

const SavedMoviesCardList = ({ savedMovies, deleteMovie }) => {



    return (
        <section className="cards">
            <div className="cards__inner">
                <ul className="card-list card-list_saved-movies">
                    {
                        savedMovies.map((movie) => <Card
                            key={movie._id}
                            isSaved={true}
                            deleteMovie={deleteMovie}
                            movie={movie}/>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default SavedMoviesCardList;