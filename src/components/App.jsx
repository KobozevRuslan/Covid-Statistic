import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from './header/Header';
import { CountriesListHeader } from './countriesListHeader/CountriesListHeader';
import { LoadingWrapper } from './loadingWrapper/LoadingWrapper';
import { CountriesList } from './countriesList/CountriesList';
import { EmptyList } from './emptyList/EmptyList';

import { AppMainWrapper } from './styledComponents/App';
import { GlobalStyles } from '../styledComponents/GlobalStyles';

const URL = 'https://api.covid19api.com/summary';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryValue, setCountryValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getStatistic = () => {
    axios
      .get(URL)
      .then((res) => {
        const countries = res.data.Countries;
        setIsLoaded(true);
        setCountries(countries);
      })
      .catch((e) => {
        setIsLoaded(true);
        setError(e);
      });
  };

  useEffect(() => {
    getStatistic();
  }, []);

  const filteredCountries = countries.filter((items) => {
    return items.Country.toLowerCase().includes(countryValue.toLowerCase());
  });

  return (
    <AppMainWrapper>
      <Header setCountryValue={setCountryValue} countryValue={countryValue} />
      <CountriesListHeader />
      <LoadingWrapper error={error} isLoaded={isLoaded}>
        {filteredCountries.length !== 0 ? (
          filteredCountries
            .map((country, index) => (
              <div key={country.ID}>
                <CountriesList country={country} index={index} />
              </div>
            ))
            .splice(0, 9)
        ) : (
          <EmptyList />
        )}
      </LoadingWrapper>
      <GlobalStyles />
    </AppMainWrapper>
  );
};

export default App;
