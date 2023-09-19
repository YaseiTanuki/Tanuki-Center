import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';

import { BackgroundContextProvider } from '../src/hooks/contexts/BackgroundContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BackgroundContextProvider>
        <App />
      </BackgroundContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
