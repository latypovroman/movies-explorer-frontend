import React from 'react';
import Card from "../Card/Card";

const SavedMoviesCardList = () => {
    return (
        <section className="cards">
            <div className="cards__inner">
                <ul className="card-list card-list_saved-movies">
                    { [...Array(3)].map((card, index) =>
                        <Card key={index}/>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default SavedMoviesCardList;