import React, {useEffect} from 'react';
import Card from "../Card/Card";
import './MoviesCardList.css'

const MoviesCardList = ({ movieList, addSavedMovie, savedMovies, deleteSavedMovie }) => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const [deviceLayout, setDeviceLayout] = React.useState({quantity: 12, forAdd: 4});
    const [shownMovieList, setShownMovieList] = React.useState([]);

    const handleWidth = () => {
        setTimeout(() => setWidth(window.innerWidth), 1000);
    }
    window.addEventListener('resize', handleWidth);

    const checkLayoutType = () => {
        if (width > 1200) {
            setDeviceLayout({quantity: 12, forAdd: 4})
        }
        if (width <= 1200 && width > 960) {
            setDeviceLayout({quantity: 12, forAdd: 3})
        }
        if (width <= 960 && width > 560) {
            setDeviceLayout({quantity: 8, forAdd: 2})
        }
        if (width <= 560) {
            console.log('ok', deviceLayout)
            setDeviceLayout({quantity: 5, forAdd: 1})
            console.log('ok', deviceLayout)
        }
    }

    useEffect(() => {
        checkLayoutType();
    }, [width])

    useEffect(() => {
        setShownMovieList(movieList.slice(0, deviceLayout.quantity));

    }, [deviceLayout.quantity, movieList])

    const addMoreCards = () => {
        checkLayoutType();
        const forAdd = deviceLayout.forAdd;
        const quantity = deviceLayout.quantity;

        if (shownMovieList.length + forAdd <= movieList.length) {
            const newQuantity = quantity + forAdd;
            setDeviceLayout({  ...deviceLayout, quantity: newQuantity});
            setShownMovieList(movieList.slice(0, newQuantity));
        }

        if (shownMovieList.length + forAdd > movieList.length) {
            setShownMovieList(movieList);
        }
    }

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
                        shownMovieList.map((movie) =>
                        <Card
                            isSaved={isSaved(movie)}
                            movie={movie}
                            key={movie.id}
                            saveMovie={addSavedMovie}
                            deleteMovie={deleteSavedMovie}
                        />)
                    }
                </ul>
                {
                    shownMovieList.length < movieList.length &&
                    <button className="card-list__more" onClick={addMoreCards}>Ещё</button>
                }
            </div>
        </section>
    );
};

export default MoviesCardList;