import React, { useCallback, useEffect, useState } from 'react';
import './styles/App.css';
import ResultBlock from '@components/ResultBlock';
import SearchBlock from '@components/SearchBlock';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Modal from '@components/UI/modal/Modal';
import localStorageGetTextOrSetEmptyString from './service/localStorage';
import { SuccessFetchAnswer } from './interfaces/types';
import useFetching from './hooks/useFetching';
import PhotoService from './API/PhotoService';

export default function App() {
  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams({});
  const [text, setText] = useState(localStorageGetTextOrSetEmptyString());
  const [modal, setModal] = useState(false);
  const [heading, setHeading] = useState(localStorageGetTextOrSetEmptyString());
  const [config, setConfig] = useState<null | SuccessFetchAnswer | 'bad' | undefined>(null);
  const [limit] = useState(20);
  const page = params.get('page') ? Number(params.get('page')) : 1;
  document.body.className = modal ? 'lock' : 'body';

  const [fetchData, isPhotosLoading, errorMessage] = useFetching(
    async (limitNumber, pageNumber) => {
      const fetchArg = localStorage.getItem('text') ? localStorage.getItem('text') : 'photo';
      const data = await PhotoService.fetchResults(fetchArg, limitNumber, pageNumber);
      setConfig(data);
    },
  );

  const handleChangePage = useCallback(
    (p: number) => {
      setSearchParams({ page: String(p) });
    },
    [params],
  );

  useEffect(() => {
    fetchData(limit, page);
  }, [heading, params]);

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
      navigate('/', { state: page });
      if (params.has('page')) {
        params.delete('page');
      }
    },
    [text],
  );
  return (
    <div className="App">
      <div
        role="button"
        tabIndex={0}
        aria-label="overlay"
        className={modal ? 'overlay' : 'overlay overlay_hidden'}
        onClick={() => {
          setModal(false);
        }}
        onKeyDown={() => {
          setModal(false);
        }}
      />
      <SearchBlock
        buttonName="Search"
        textProp={text!}
        handleChangeInput={handleChangeInput}
        setLocalStorage={setLocalStorage}
      />
      {errorMessage ? (
        <h1 className="error-message">{errorMessage}</h1>
      ) : (
        <ResultBlock
          textProp={heading!}
          result={config!}
          isPhotoLoading={isPhotosLoading}
          page={page}
          changePage={handleChangePage}
          showModal={setModal}
        />
      )}
      <Modal visible={modal} setVisible={setModal} />
    </div>
  );
}
