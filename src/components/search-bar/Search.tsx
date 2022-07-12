import './search.scss'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trend from '../trend/Trend';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchString, setSearchString] = useState('');
    const [showTrendContainer, setShowTrendContainer] = useState(false);
    const navigate = useNavigate();
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!showTrendContainer) {
            setShowTrendContainer(true);
        }
    }
    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        //if (!showTrendContainer && searchString == '') {
            setShowTrendContainer(false);
        //}
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    }
    const handleSearchClick = () => {
        navigate(`search/${searchString}`);
    }
    return ( 
        <>
            <div className='searchBar-container'>
                <input type="text" className="searchBar"
                    placeholder='Search'
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                />
                <FontAwesomeIcon
                    onClick={handleSearchClick}
                    icon={faSearch} className="searchBar-icon" /> 
            </div>
            { showTrendContainer && <Trend search={searchString} /> }
        </>
     );
}

export default Search;