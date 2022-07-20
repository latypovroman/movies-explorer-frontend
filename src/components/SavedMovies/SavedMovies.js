import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";

const SavedMovies = ({ savedMovies, deleteMovie }) => {
    return (
        <main>
            <SearchForm/>
            <SavedMoviesCardList savedMovies={savedMovies} deleteMovie={deleteMovie}/>
        </main>
    );
};

export default SavedMovies;