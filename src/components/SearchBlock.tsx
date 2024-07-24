import React from 'react';
import SearchButton from '@components/UI/button/SearchButton';
import SearchInput from '@components/UI/input/SearchInput';
import { SearchProps } from '../interfaces/types';

export default function SearchBlock({
  buttonName,
  textProp,
  handleChangeInput,
  setLocalStorage,
}: SearchProps) {
  return (
    <form className="search-container">
      <SearchInput value={textProp} onChange={handleChangeInput} />
      <SearchButton onClick={setLocalStorage}>{buttonName}</SearchButton>
    </form>
  );
}
