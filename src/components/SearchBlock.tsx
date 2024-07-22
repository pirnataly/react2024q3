import React from 'react';
import { SearchProps } from '../interfaces/types';

export default function SearchBlock(props: SearchProps) {
  const { buttonName, textProp, handleChangeInput, setLocalStorage } = props;
  return (
    <div className="search-container">
      <input className="input" value={textProp} onChange={handleChangeInput} />
      <button className="search-button" onClick={setLocalStorage} type="button">
        {buttonName}
      </button>
    </div>
  );
}
