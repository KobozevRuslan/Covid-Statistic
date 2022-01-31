import React, { useState } from 'react';

import { CountryModal } from '../countriesModal/CountryModal';

import { ListItem } from './styledComponents/CountriesList';

const indexNumber = 1;

export const CountriesList = ({ country, index }) => {
  const [isModal, setModal] = useState(false);

  return (
    <>
      <ListItem onClick={() => setModal(true)}>
        <tbody>
          <tr>
            <td className="firstCell">{index + indexNumber}</td>
            <td className="secondCell">{country.Country}</td>
            <td className="lastCell">{country.TotalConfirmed}</td>
          </tr>
        </tbody>
        <CountryModal
          visible={isModal}
          onClose={() => setModal(!isModal)}
          country={country}
        />
      </ListItem>
    </>
  );
};
