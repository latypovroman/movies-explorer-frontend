import React from 'react';
import unbookmark from "../../images/save.svg";

const DeleteMovieButton = ({ onButtonClick, children }) => {
    return (
        <button className="card__save-btn" onClick={onButtonClick}>
            { children }
            <img src={unbookmark} alt="Значок закладки активный"/>
        </button>
    );
};

export default DeleteMovieButton;