import React from 'react';
import reactDom from 'react-dom';

import { CountryModalItems } from './countryModalItems/CountryModalItems';

import { CountryModalWrapper } from './styledComponents/CountryModal';

export const CountryModal = ({ visible, onClose, country }) => {
  if (!visible) return null;

  return reactDom.createPortal(
    <CountryModalWrapper isOpened={visible} onClick={onClose}>
      <CountryModalItems country={country} onClose={onClose} />
    </CountryModalWrapper>,
    document.getElementById('modal')
  );
};

