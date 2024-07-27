import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import ErrorBoundary from '@components/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import router from './service/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>,
);
