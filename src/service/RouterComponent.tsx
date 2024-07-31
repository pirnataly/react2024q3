import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from '@components/UI/modal/Modal';
import NotFound from '../pages/NotFound';
import AppLayout from '../AppLayout';

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Modal />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
