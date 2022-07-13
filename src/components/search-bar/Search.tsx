import './search.scss'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trend from '../trend/Trend';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface Props {
    outline : boolean,
}
function Search({outline} : Props) {
    const [searchString, setSearchString] = useState('');
    const [showTrendContainer, setShowTrendContainer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!showTrendContainer) {
            setShowTrendContainer(true);
        }
        setIsVisible(true);
    }
    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        //if (!showTrendContainer && searchString == '') {
        //setShowTrendContainer(false);
        setIsVisible(false);
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
                <input type="text" className={ outline ? 'searchBar outline' : 'searchBar' }
                    placeholder='Search'
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />
                <FontAwesomeIcon
                    onClick={handleSearchClick}
                    icon={faSearch} className="searchBar-icon" /> 
            </div>
            {showTrendContainer && <Trend search={searchString} visible={isVisible}/> }
        </>
     );
}

export default Search;