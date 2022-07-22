import React, {useMemo} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import './Movies.css';
import Preloader from "../Preloader/Preloader";

const Movies = ({ addSavedMovie, savedMovies, deleteSavedMovie }) => {

    const [movieList, setMovieList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [filter, setFilter] = React.useState({
        shorts: true,
        search: '',
    })

    function fetchMovieList() {
        moviesApi.getBeatMovies()
            .then((data) => {
                setIsLoading(true);
                setMovieList(data);
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

    React.useEffect(() => {
        fetchMovieList();
    }, [])

    const handleShortsTumbler = () => {
        setFilter({
            ...filter,
            shorts: !filter.shorts,
        });
    }

    const filteredMovieList = useMemo(() => {
        if (filter.shorts === true && filter.search === '') {
            return movieList;
        }
        return movieList.filter((movie) => {
            const short = movie.duration < 40;
            const tumblerCheck = filter.shorts ? true : !short;
            const title = movie.nameRU.toLowerCase();
            return title.includes(filter.search) && tumblerCheck;
        })
    }, [filter, movieList])


    const handleSearchText = (value) => {
        value = value.toLowerCase();
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
            />
            { checkMovieListRender() }
        </main>
    );
};

export default Movies;