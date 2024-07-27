import React from 'react';
import Loader from '@components/UI/Loader/Loader';
import '../styles/App.css';
import Results from '@components/Results';
import Pagination from '@components/UI/pagination/Pagination';
import { Photo, ResultsProps } from '../interfaces/types';
import localStorageGetTextOrSetEmptyString from '../service/localStorage';

export default function ResultBlock({ result, isPhotoLoading, page, changePage }: ResultsProps) {
  const resultFromRequest = result ?? 'bad';
  const photos: [] | Photo[] = resultFromRequest === 'bad' ? [] : resultFromRequest.photos.photo;
  const total = resultFromRequest === 'bad' ? 0 : resultFromRequest.photos.total;
  const pages = resultFromRequest === 'bad' ? 0 : resultFromRequest.photos.pages;

  if (resultFromRequest !== 'bad' && (pages < page || Number.isNaN(page))) {
    return (
      <>
        <h1 className="results-heading">This page does not exist</h1>
        <h3 className="results-subheading">Choose another page or change text of your request</h3>
        <Pagination pages={pages} page={page} changePage={changePage} />
      </>
    );
  }
  return isPhotoLoading ? (
    <Loader />
  ) : (
    <>
      <Results photos={photos} headingText={localStorageGetTextOrSetEmptyString()} total={total} />
      <Pagination pages={pages} page={page} changePage={changePage} />
    </>
  );
}
