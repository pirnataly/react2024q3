import React, { useCallback, useEffect, useState } from 'react';
import SearchBlock from './components/SearchBlock';
import './styles/App.css';
import { SuccessFetchAnswer } from './interfaces/types';
import ResultBlock from './components/ResultBlock';
import PhotoService from './API/PhotoService';
import localStorageGetTextOrSetEmptyString from './service/localStorage';
import useFetching from './hooks/useFetching';

export default function App() {
  const [text, setText] = useState(localStorageGetTextOrSetEmptyString());
  const [heading, setHeading] = useState(localStorageGetTextOrSetEmptyString());
  const [config, setConfig] = useState<null | SuccessFetchAnswer | 'bad' | undefined>(null);
  const [fetchData, isPhotosLoading, errorMessage] = useFetching(async () => {
    const fetchArg = localStorage.getItem('text') ? localStorage.getItem('text') : 'photo';
    setConfig(await PhotoService.fetchResults(fetchArg));
  });

  useEffect(() => {
    fetchData();
  }, [heading]);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target) {
        const { value } = e.target;
        setText(String(value));
      }
    },
    [setText],
  );

  const setLocalStorage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (text) {
        localStorage.setItem('text', text.trim());
      } else {
        localStorage.removeItem('text');
      }
      setHeading(localStorage.getItem('text'));
    },
    [text],
  );
  return (
    <div className="App">
      <SearchBlock
        buttonName="Search"
        textProp={text!}
        handleChangeInput={handleChangeInput}
        setLocalStorage={setLocalStorage}
      />
      {errorMessage ? (
        <h1 className="error-message">{errorMessage}</h1>
      ) : (
        <ResultBlock textProp={heading!} result={config!} isPhotoLoading={isPhotosLoading} />
      )}
    </div>
  );
}
