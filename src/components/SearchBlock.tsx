import React from 'react';
import { SearchProps } from '../interfaces/types';

export default function SearchBlock({
  buttonName,
  textProp,
  handleChangeInput,
  setLocalStorage,
}: SearchProps) {
  return (
    <div className="search-container">
      <input className="input" value={textProp} onChange={handleChangeInput} />
      <button className="search-button" onClick={setLocalStorage} type="button">
        {buttonName}
      </button>
    </div>
  );
}
