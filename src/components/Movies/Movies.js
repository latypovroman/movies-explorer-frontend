import React, {useMemo} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";

const Movies = ({ handleSaveCard, addSavedMovie, handleSaveImage }) => {

    const [movieList, setMovieList] = React.useState([]);
    const [filter, setFilter] = React.useState({
        shorts: true,
        search: '',
    })

    function fetchMovieList() {
        moviesApi.getBeatMovies()
            .then((data) => {
                setMovieList(data);
            })
            .catch((data) => {
                console.log(data);
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

    return (
        <main>
            <SearchForm
                showShorts={filter.shorts}
                handleShortsTumbler={handleShortsTumbler}
                filter={filter}
                handleSearchText={handleSearchText}
            />
            <MoviesCardList
                movieList={filteredMovieList}
                handleSaveCard={handleSaveCard}
                addSavedMovie={addSavedMovie}
                handleSaveImage={handleSaveImage}
            />
        </main>
    );
};

export default Movies;