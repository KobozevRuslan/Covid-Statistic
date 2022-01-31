import React from 'react';

import heart from '../../../assets/image/heart.png';
import scull from '../../../assets/image/scull.png';
import recovered from '../../../assets/image/vector.png';

export const CountryModalItems = ({ country, onClose }) => {
  return (
    <div className="country_modal_content" onClick={(e) => e.stopPropagation()}>
      <div className="country_modal_header">
        <h2>{country.Country}</h2>
      </div>
      <div className="country_modal_body">
        <table>
          <tbody>
            <tr>
              <td className="firstCell">
                <img src={heart} alt="heart" />
              </td>
              <td className="secondCell">Total Confirmed</td>
              <td className="lastCell">{country.TotalConfirmed}</td>
            </tr>
            <tr>
              <td className="firstCell">
                <img src={scull} alt="scull" />
              </td>
              <td className="secondCell">Total Deaths</td>
              <td className="lastCell">{country.TotalDeaths}</td>
            </tr>
            <tr>
              <td className="firstCell">
                <img
                  className="recovered-img"
                  src={recovered}
                  alt="recovered"
                />
              </td>
              <td className="secondCell">Total Recovered</td>
              <td className="lastCell">{country.TotalRecovered}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="country_modal_footer">
        <button className="country_modal_btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};
