import React from 'react';
import '../styles/App.css';
import { Photo, ResultsProps, SuccessFetchAnswer } from '../interfaces/types';
import Cards from './Cards';

export default function ResultBlock(props: ResultsProps) {
  const { result } = props;
  const headingText = localStorage.getItem('text') ? localStorage.getItem('text') : '';
  const nameOfClass = result === null ? 'spinner' : 'results-container';
  const photos: Photo[] | undefined =
    result === null ? [] : (result as SuccessFetchAnswer)?.photos.photo;
  if (result === null) {
    return <div className={nameOfClass} />;
  }
  if (result !== 'bad' && localStorage.getItem('text')) {
    return (
      <div className={nameOfClass}>
        <h1 className="results-heading">
          {result?.photos.total === 0 ? 'Nothing was ' : `${result?.photos.total} results were `}
          found for request <i>{headingText}</i>
        </h1>
        <Cards photos={photos ?? []} headingText={headingText} />
      </div>
    );
  }

  return (
    <div className={nameOfClass}>
      <Cards photos={photos ?? []} headingText={headingText} />
    </div>
  );
}
