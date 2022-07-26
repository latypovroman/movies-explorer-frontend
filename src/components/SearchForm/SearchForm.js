import React from 'react';
import './SearchForm.css'
import find from '../../images/find.svg'
import switchOn from '../../images/switch-on.svg'
import switchOff from '../../images/switch-off.svg'

const SearchForm = ({ handleSearchSubmit, handleSearchText, showShorts, handleShortsTumbler }) => {

    const [value, setValue] = React.useState('');

    const onInputChange = (evt) => {
        setValue(evt.target.value);
        handleSearchText(evt.target.value);
    }

    const search = () => {
        handleSearchSubmit(value)
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
                    value={value}
                    onChange={onInputChange}
                />
                <button
                    className="search__button"
                    onClick={search}>
                    <img src={find} alt="Иконка поиска"/>
                </button>
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