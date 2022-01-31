import React from 'react';

import searchIcon from '../../assets/image/search.png';

import { SearchInputWrapper } from './styledComponents/SearchInput';

export const SearchInput = ({ countryValue, setCountryValue }) => {
  return (
    <SearchInputWrapper>
      <input
        className="searchInput"
        type="text"
        placeholder="Search..."
        name="text"
        maxLength="20"
        value={countryValue}
        onChange={(e) => setCountryValue(e.target.value)}
      />
      <div className="searchImgWrapper">
        <img src={searchIcon} alt="searchIcon" />
      </div>
    </SearchInputWrapper>
  );
};
