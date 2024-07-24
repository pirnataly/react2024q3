import React from 'react';
import { InputProps } from '../../../interfaces/types';
import classes from './SearchInput.module.css';

export default function SearchInput({ value, onChange }: InputProps) {
  return (
    <input className={classes.input} value={value} onChange={onChange} placeholder="Enter text" />
  );
}
