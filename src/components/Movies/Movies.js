import React, { useContext, useMemo } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import './Movies.css';
import Preloader from "../Preloader/Preloader";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Movies = ({ addSavedMovie, savedMovies, deleteSavedMovie }) => {

    const auth = useContext(CurrentUserContext);
    const [movieList, setMovieList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [filter, setFilter] = React.useState({
        shorts: true,
        search: '',
    })

    function fetchMovieList() {
        const storedList = localStorage.getItem(`${auth.id}-stored-filter`);
         if (!storedList) {
            moviesApi.getBeatMovies()
                .then((data) => {
                    setIsLoading(true);
                    setMovieList(data);
                    localStorage.setItem('movie-list', JSON.stringify(data));
                    console.log(data)
                })
                .catch((data) => {
                    console.log(data);
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
                })
        }

        if (storedList) {
            setMovieList(JSON.parse(localStorage.getItem('movie-list')));
            setFilter(JSON.parse(storedList))
        }
    }

    const filteredMovieList = useMemo(() => {
        if (filter.shorts === true && filter.search === '') {
            return movieList;
        }
        return movieList.filter((movie) => {
            localStorage.setItem(`${auth.id}-stored-filter`, JSON.stringify(filter));
            const short = movie.duration < 40;
            const tumblerCheck = filter.shorts ? true : !short;
            const title = movie.nameRU.toLowerCase();
            return title.includes(filter.search) && tumblerCheck;
        })

    }, [filter, movieList])

    React.useEffect(() => {
        fetchMovieList();
    }, [])

    const handleShortsTumbler = () => {
        setFilter({
            ...filter,
            shorts: !filter.shorts,
        });
    }


    const handleSearchText = (value) => {
        value = value.toLowerCase();
        setFilter({
            ...filter,
            search: value
        })
    }

    const handleSearchSubmit = (value) => {
        setFilter({
            ...filter,
            search: value
        })
    }

    const checkMovieListRender = () => {
        if (isLoading) {
            return <Preloader/>
        } else {
            if (filteredMovieList.length) {
                return <MoviesCardList
                            movieList={filteredMovieList}
                            addSavedMovie={addSavedMovie}
                            savedMovies={savedMovies}
                            deleteSavedMovie={deleteSavedMovie}
                       />
            } else {
                return <p className="movies__not-found">Ничего не найдено</p>
            }
        }
    }

    return (
        <main>
            <SearchForm
                showShorts={filter.shorts}
                handleShortsTumbler={handleShortsTumbler}
                filter={filter}
                handleSearchText={handleSearchText}
                handleSearchSubmit={handleSearchSubmit}
            />
            { checkMovieListRender() }
        </main>
    );
};

export default Movies;