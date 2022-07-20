import React from 'react';
import bookmark from "../../images/save-transparent.svg";

const SaveMovieButton = ({ onButtonClick }) => {
    return (
            <button className="card__save-btn" onClick={onButtonClick}>
                <img src={bookmark} alt="Значок закладки неактивный"/>
            </button>
    );
};

export default SaveMovieButton;