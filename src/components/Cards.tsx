import React from 'react';
import { CardProps, Photo } from '../interfaces/types.tsx';
import ResultBlock from './ResultBlock';

export default class Cards extends React.Component<CardProps & ResultBlock, unknown> {
  constructor(props: CardProps & ResultBlock) {
    super(props);
  }

  render() {
    const photos: Photo[] | [] = this.props.photos;
    const headingText = this.props.headingText;
    return (
      <div className="cards-container">
        {photos.map((post) => (
          <div className="results-card" key={post.id}>
            <div className="results-card__image">
              <img
                src={post.url_l}
                className="results-card__image"
                alt={headingText ?? 'photo'}
              ></img>
            </div>
            <h5 className="card-description">{post.title}</h5>
          </div>
        ))}
      </div>
    );
  }
}
