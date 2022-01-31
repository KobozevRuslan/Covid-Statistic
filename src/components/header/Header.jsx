import React from 'react';

import { SearchInput } from '../searchInput/SearchInput';

import logo from '../../assets/image/logo.png';

import { HeaderWrapper } from './styledComponents/Header';

export const Header = ({ countryValue, setCountryValue }) => {
  return (
    <HeaderWrapper>
      <div className="logoItemsWrapper">
        <img src={logo} alt="logo" />
        <h1>statistic</h1>
      </div>
      <SearchInput
        setCountryValue={setCountryValue}
        countryValue={countryValue}
      />
    </HeaderWrapper>
  );
};
