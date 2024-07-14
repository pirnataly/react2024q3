import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import '../src/styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary fallback={<p className="results-heading">Something went wrong</p>}>
    <App />
  </ErrorBoundary>,
);
