import React from 'react';
import './SearchForm.css'
import find from '../../images/find.svg'
import switchOn from '../../images/switch-on.svg'
import switchOff from '../../images/switch-off.svg'

const SearchForm = ({ handleSearchText, showShorts, handleShortsTumbler }) => {

    const onInputChange = (evt) => {
        handleSearchText(evt.target.value)
    }

    return (
        <div className="search">
            <div className="search__inner">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Фильм"
                    required
                    name="search"
                    onChange={onInputChange}
                />
                <button className="search__button"><img src={find} alt="Иконка поиска"/></button>
                <div className="search__switch">
                    <button className="search__switch-switcher" onClick={handleShortsTumbler}>
                        {
                            showShorts
                                ? <img className="search__switch-image" src={switchOn} alt="Включеный чекбокс"/>
                                : <img className="search__switch-image" src={switchOff} alt="Выключеный чекбокс"/>
                        }
                    </button>
                    <p className="search__switch-description">Короткометражки</p>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;