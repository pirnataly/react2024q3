import React from 'react';
import Loader from '@components/UI/Loader/Loader';
import '../styles/App.css';
import Results from '@components/Results';
import { Photo, ResultsProps } from '../interfaces/types';
import localStorageGetTextOrSetEmptyString from '../service/localStorage';

export default function ResultBlock({ result, isPhotoLoading }: ResultsProps) {
  const resultFromRequest = result ?? 'bad';
  const photos: [] | Photo[] = resultFromRequest === 'bad' ? [] : resultFromRequest.photos.photo;
  return isPhotoLoading ? (
    <Loader />
  ) : (
    <Results photos={photos} headingText={localStorageGetTextOrSetEmptyString()} />
  );
}
