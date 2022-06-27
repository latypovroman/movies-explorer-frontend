import React from 'react';
import movieCover from '../../images/movie-cover.png'
import './Card.css'
import { useLocation } from "react-router-dom";
import deleteCard from "../../images/delete.svg";
import unbookmark from "../../images/save.svg";
import bookmark from "../../images/save-transparent.svg";


const Card = () => {

    const [isSaved, setIsSaved] = React.useState(false);
    const location = useLocation();

    const handleSave = () => {
        setIsSaved(!isSaved);
    }

    const handleImage = () => {
        if (location.pathname === '/saved-movies') {
            return <img className="card__delete-icon" src={deleteCard} alt="Значок удаления закладки"/>
        } else if (isSaved) {
            return <img src={unbookmark} alt="Значок закладки активный"/>
        } else {
            return <img src={bookmark} alt="Значок закладки неактивный"/>
        }
    }

    return (
        <li className="card">
            <img className="card__image" src={movieCover} alt="Постер фильма"/>
            <div className="card__panel">
                <h2 className="card__title">33 слова о дизайне</h2>
                <button className="card__save-btn" onClick={handleSave}>
                    {handleImage()}
                </button>
                <p className="card__length">1ч42м</p>
            </div>
        </li>
    );
};

export default Card;