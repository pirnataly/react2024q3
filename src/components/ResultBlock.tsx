import React, { ReactNode } from 'react';
import '../styles/App.css';
import { Photo, ResultBlockState, ResultsProps, SuccessFetchAnswer } from '../interfaces/types';
import Cards from './Cards';

export default class ResultBlock extends React.Component<ResultsProps, ResultBlockState> {
  constructor(props: ResultsProps) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    const { result } = this.props;
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
            {result === undefined ? 'Nothing was ' : `${result.photos.total} results were `}
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
}
