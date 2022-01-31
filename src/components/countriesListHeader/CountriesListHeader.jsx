import React from 'react';

import { ListItem } from './styledComponents/CountriesListHeader';

export const CountriesListHeader = () => {
  return (
    <ListItem>
      <thead>
        <tr>
          <th className="firstCell">№</th>
          <th className="secondCell">Country</th>
          <th className="lastCell">Total Confirmed</th>
        </tr>
      </thead>
    </ListItem>
  );
};
