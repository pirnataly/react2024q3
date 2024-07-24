import React from 'react';
import classes from './SearchButton.module.css';
import { ButtonProps } from '../../../interfaces/types';

export default function SearchButton({ onClick, children }: ButtonProps) {
  return (
    <button className={classes.searchButton} onClick={onClick} type="submit">
      {children}
    </button>
  );
}
