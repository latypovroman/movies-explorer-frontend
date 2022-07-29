import React, { useMemo } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";


const SavedMovies = ({ savedMovies, deleteMovie }) => {

    const [filter, setFilter] = React.useState({
        shorts: true,
        search: '',
    })

    const handleShortsTumbler = () => {
        setFilter({
            ...filter,
            shorts: !filter.shorts,
        });
    }

    const filteredMovieList = useMemo(() => {
        if (filter.shorts === true && filter.search === '') {
            return savedMovies;
        }
        return savedMovies.filter((movie) => {
            const short = movie.duration < 40;
            const tumblerCheck = filter.shorts ? true : !short;
            const title = movie.nameRU.toLowerCase();
            return title.includes(filter.search) && tumblerCheck;
        })
    }, [filter, savedMovies])

    const handleSearchText = (value) => {
        value = value.toLowerCase();
        setFilter({
            ...filter,
            search: value
        })
    }

    return (
        <main>
            <SearchForm
                showShorts={filter.shorts}
                handleShortsTumbler={handleShortsTumbler}
                filter={filter}
                handleSearchText={handleSearchText}
            />
            <SavedMoviesCardList savedMovies={filteredMovieList} deleteMovie={deleteMovie}/>
        </main>
    );
};

export default SavedMovies;