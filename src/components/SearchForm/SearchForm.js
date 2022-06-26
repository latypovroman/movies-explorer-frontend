import React from 'react';
import './SearchForm.css'
import find from '../../images/find.svg'
import switchOn from '../../images/switch-on.svg'
import switchOff from '../../images/switch-off.svg'

const SearchForm = () => {

    const [isSwitchOn, setIsSwitchOn] = React.useState(true);

    const handleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
    }

    return (
        <div className="search">
            <input className="search__input" placeholder="Фильм"/>
            <button className="search__button"><img src={find} alt="Иконка поиска"/></button>
            <div className="search__switch">
                <button className="search__switch-switcher" onClick={handleSwitch}>
                    {
                        isSwitchOn
                        ? <img className="search__switch-image" src={switchOn} alt="Включеный чекбокс"/>
                        : <img className="search__switch-image" src={switchOff} alt="Выключеный чекбокс"/>
                    }
                </button>
                <p className="search__switch-description">Короткометражки</p>
            </div>
        </div>
    );
};

export default SearchForm;