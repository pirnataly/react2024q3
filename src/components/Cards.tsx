import React from 'react';
import ResultBlock from '@components/ResultBlock';
import { CardProps, Photo } from '../interfaces/types.tsx';

export default class Cards extends React.Component<CardProps, unknown> {
  static photos: Photo[] | [];

  constructor(props: CardProps & ResultBlock) {
    super(props);
    Cards.photos = this.props.photos;
  }

  render() {
    const { headingText } = this.props.headingText;
    return (
      <div className="cards-container">
        {Cards.photos.map((post) => (
          <div className="results-card" key={post.id}>
            <div className="results-card__image">
              <img src={post.url_l} className="results-card__image" alt={headingText ?? 'photo'} />
            </div>
            <h5 className="card-description">{post.title}</h5>
          </div>
        ))}
      </div>
    );
  }
}
