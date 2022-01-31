import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Preload } from './components/preload/Preload';

const App = lazy(() => import('./components/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preload />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
