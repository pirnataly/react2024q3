import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import ErrorBoundary from '@components/ErrorBoundary';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
