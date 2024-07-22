import React from 'react';
import { CardProps } from '../interfaces/types';

export default function Cards(props: CardProps) {
  const { photos, headingText } = props;
  return (
    <div className="cards-container">
      {photos.map((post) => (
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
