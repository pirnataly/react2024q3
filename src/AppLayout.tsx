import React from 'react';
import { Outlet } from 'react-router-dom';
import App from './App';

export default function AppLayout() {
  return (
    <>
      <App />
      <Outlet />
    </>
  );
}
