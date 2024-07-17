import React, { ReactNode } from 'react';
import '../styles/App.css';
import { Photo, ResultBlockState, ResultsProps, SuccessFetchAnswer } from '../interfaces/types.tsx';
import Cards from './Cards.tsx';
import App from '../App.tsx';

export default class ResultBlock extends React.Component<
  ResultsProps & App,
  ResultBlockState & ResultBlock
> {
  constructor(props: ResultsProps & App) {
    super(props);
  }

  render(): ReactNode {
    const headingText = localStorage.getItem('text') ? localStorage.getItem('text') : '';
    const nameOfClass = this.props.state.config === null ? 'spinner' : 'results-container';

    const photos: Photo[] | undefined =
      this.props.state.config === null
        ? []
        : (this.props.state.config as SuccessFetchAnswer)?.photos.photo;

    if (this.props.state.config === null) {
      return <div className={nameOfClass} />;
    }

    if (this.props.state.config !== 'bad' && localStorage.getItem('text')) {
      return (
        <div className={nameOfClass}>
          <h1 className="results-heading">
            {this.props.state.config === undefined
              ? 'Nothing was '
              : `${this.props.state.config.photos.total} results were `}
            found for request <i>{headingText}</i>
          </h1>
          <Cards photos={photos ?? []} headingText={headingText} {...this} />
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
