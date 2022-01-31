import React from 'react';

import { Preload } from '../preload/Preload';

export const LoadingWrapper = (props) => {
  return (
    <>
      {props.error ? (
        <h2 className="errorMessage">{props.error.message}</h2>
      ) : !props.isLoaded ? (
        <Preload />
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};
