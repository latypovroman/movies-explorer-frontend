import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";

const SavedMovies = () => {
    return (
        <main>
            <SearchForm/>
            <SavedMoviesCardList/>
        </main>
    );
};

export default SavedMovies;