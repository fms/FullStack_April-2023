// @ts-ignore

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './APP/Store';
import App from './App';

import './index.css';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


