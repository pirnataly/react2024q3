import React from 'react';
import { CardsProps, Photo } from '../interfaces/types';

export default class Cards extends React.Component<CardsProps, Photo> {
  constructor(props: CardsProps) {
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
              <img src={post.url_l} className="results-card__image" alt={headingText}></img>
            </div>
            <h5 className="card-description">{post.title}</h5>
          </div>
        ))}
      </div>
    );
  }
}
