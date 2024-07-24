import React, { useCallback, useEffect, useState } from 'react';
import SearchBlock from './components/SearchBlock';
import './styles/App.css';
import { SuccessFetchAnswer } from './interfaces/types';
import ResultBlock from './components/ResultBlock';
import PhotoService from './API/PhotoService';
import localStorageGetTextOrSetEmptyString from './service/localStorage';

export default function App() {
  const [text, setText] = useState(localStorageGetTextOrSetEmptyString());
  const [heading, setHeading] = useState(localStorageGetTextOrSetEmptyString());
  const [config, setConfig] = useState<null | SuccessFetchAnswer | 'bad' | undefined>(null);
  const [isPhotosLoading, setIsPhotosLoading] = useState(false);

  function fetchData(isMounted: boolean) {
    const fetchArg = localStorage.getItem('text') ? localStorage.getItem('text') : 'photo';
    setIsPhotosLoading(true);
    PhotoService.fetchResults(fetchArg).then((data) => {
      if (isMounted) {
        setConfig(data);
      }
      setIsPhotosLoading(false);
    });
  }

  useEffect(() => {
    let mounted = true;
    fetchData(mounted);
    return () => {
      mounted = false;
    };
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
      <ResultBlock textProp={heading!} result={config!} isPhotoLoading={isPhotosLoading} />
    </div>
  );
}
