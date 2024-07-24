import Cards from '@components/Cards';
import React from 'react';
import { ResultsType } from '../interfaces/types';

export default function Results({ photos, headingText }: ResultsType) {
  return (
    <div className="results-container">
      <h1 className="results-heading">
        {photos.length === 0 ? 'Nothing was ' : `${photos.length} results were `}
        found for request <i>{headingText}</i>
      </h1>
      <Cards photos={photos ?? []} headingText={headingText} />
    </div>
  );
}
