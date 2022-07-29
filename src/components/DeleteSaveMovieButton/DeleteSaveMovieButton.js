import React from 'react';
import deleteCard from "../../images/delete.svg";

const DeleteSaveMovieButton = ({ onButtonClick }) => {
    return (
        <button className="card__save-btn" onClick={onButtonClick}>
            <img className="card__delete-icon" src={deleteCard} alt="Значок удаления закладки"/>
        </button>
    );
};

export default DeleteSaveMovieButton;