import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import ErrorBoundary from '@components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './service/RouterComponent';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </ErrorBoundary>,
);
