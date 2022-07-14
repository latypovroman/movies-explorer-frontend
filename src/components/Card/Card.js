import React from 'react';
import './Card.css'
// Использую после зачета
// import deleteCard from "../../images/delete.svg";
// import unbookmark from "../../images/save.svg";
// import bookmark from "../../images/save-transparent.svg";
import deleteCard from "../../images/wbutton-x.svg";
import unbookmark from "../../images/wbutton-unsave.svg";
import bookmark from "../../images/wbutton-save.svg";


const Card = ({ movie, saveMovie }) => {

    const addToSaveList = () => saveMovie(movie);

    const imageUrl = () => {
        return `https://api.nomoreparties.co${movie.image.url}`
    }

    // const handleImage = () => {
    //     if (location.pathname === '/saved-movies') {
    //         return <img className="card__delete-icon" src={deleteCard} alt="Значок удаления закладки"/>
    //     } else if (isSaved) {
    //         return <img src={unbookmark} alt="Значок закладки активный"/>
    //     } else {
    //         return <img src={bookmark} alt="Значок закладки неактивный"/>
    //     }
    // }

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
            <img className="card__image" src={imageUrl()} alt="Постер фильма"/>
            <div className="card__panel">
                <h2 className="card__title">{movie.nameRU}</h2>
                <button className="card__save-btn" onClick={addToSaveList}>
                    {/*{handleImage()}*/}
                </button>
                <p className="card__length">{lengthToString(movie.duration)}</p>
            </div>
        </li>
    );
};

export default Card;