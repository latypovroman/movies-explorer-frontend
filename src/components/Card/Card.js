import React from 'react';
import './Card.css'
import { useLocation } from "react-router-dom";
import SaveMovieButton from "../SaveMovieButton/SaveMovieButton";
import DeleteMovieButton from "../DeleteMovieButton/DeleteMovieButton";
import DeleteSaveMovieButton from "../DeleteSaveMovieButton/DeleteSaveMovieButton";


const Card = ({ movie, saveMovie, deleteMovie, isSaved }) => {

    const location = useLocation();
    const onSaveClick = () => saveMovie(movie);
    const onDeleteClick = () => deleteMovie(movie);

    const imageUrl = () => {
        return `https://api.nomoreparties.co${movie.image.url}`
    }

    const handleCardButton = () => {
        if (location.pathname === '/saved-movies') {
            return <DeleteSaveMovieButton onButtonClick={onDeleteClick}/>
        } else if (isSaved) {
            return <DeleteMovieButton onButtonClick={onDeleteClick}/>
        } else {
            return <SaveMovieButton onButtonClick={onSaveClick}/>
        }
    }

    const lengthToString = (duration) => {
        if (duration <= 59) {
            return `${duration}м`
        }

        if (duration > 59) {
            return `${Math.floor(duration / 60)}ч ${duration % 60}м`
        }
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={ location.pathname === '/movies' ? imageUrl() : movie.image} //данные от разных апи в разном виде
                alt="Постер фильма"/>
            <div className="card__panel">
                <h2 className="card__title">{movie.nameRU}</h2>
                    { handleCardButton() }
                <p className="card__length">{lengthToString(movie.duration)}</p>
            </div>
        </li>
    );
};

export default Card;