import React from 'react';

import { EmptyListWrapper } from './styledComponents/EmptyList';

export const EmptyList = () => {
  return (
    <EmptyListWrapper>
      <p>Country is not found</p>
    </EmptyListWrapper>
  );
};
