import React from 'react';
import classes from './Modal.module.css';
import { ModalProps } from '../../../interfaces/types';

export default function Modal({ children, visible, setVisible }: ModalProps) {
  const mainClasses = [classes.modal];
  if (visible) {
    mainClasses.push(classes.modal_active);
  }

  return (
    <div className={mainClasses.join(' ')}>
      <button type="button" className={classes.closeButton} onClick={() => setVisible(false)}>
        Close
      </button>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
}
