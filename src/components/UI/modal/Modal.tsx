import React from 'react';
import ModalContent from '@components/UI/modal/ModalContent';
import classes from './Modal.module.css';
import { ModalProps } from '../../../interfaces/types';

export default function Modal({
  visible,
  setVisible,
  setSearchParams,
  id,
  params,
}: Partial<ModalProps>) {
  const mainClasses = [classes.modal];
  if (visible) {
    mainClasses.push(classes.modal_active);
  }

  return (
    <div className={mainClasses.join(' ')}>
      <button
        type="button"
        className={classes.closeButton}
        onClick={() => {
          if (setVisible) {
            setVisible(false);
          }
          if (params) {
            if (params.get('detail')) {
              params.delete('detail');
            }
          }
          if (setSearchParams) {
            setSearchParams(new URLSearchParams(params));
          }
        }}
      >
        Close
      </button>
      <ModalContent id={id ?? null} />
    </div>
  );
}
