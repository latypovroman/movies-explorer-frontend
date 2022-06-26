import React from 'react';
import bookmark from '../../images/save-transparent.svg';
import unbookmark from '../../images/save.svg';
import movieCover from '../../images/movie-cover.png'
import './Card.css'


const Card = () => {

    const [isSaved, setIsSaved] = React.useState(false);

    const handleSave = () => {
        setIsSaved(!isSaved);
    }

    return (
        <div className="card">
            <img className="card__image" src={movieCover} alt="Постер фильма"/>
            <div className="card__panel">
                <h2 className="card__title">33 слова о дизайне</h2>
                <button className="card__save-btn" onClick={handleSave}>
                    {
                        isSaved
                        ? <img src={unbookmark} alt="Значок закладки активный"/>
                        : <img src={bookmark} alt="Значок закладки неактивный"/>
                    }
                </button>
                <p className="card__length">1ч42м</p>
            </div>

        </div>
    );
};

export default Card;