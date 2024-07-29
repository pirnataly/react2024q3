import React from 'react';
import { CardProps } from '../interfaces/types';

export default function Cards(props: CardProps) {
  const { photos, headingText, showModal } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      className="cards-container"
      onClick={() => showModal(true)}
      onKeyDown={() => showModal(true)}
    >
      {photos.map((post) => (
        <div
          className="results-card"
          key={post.id}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => {}}
        >
          <div className="results-card__image">
            <img src={post.url_l} className="results-card__image" alt={headingText ?? 'photo'} />
          </div>
          <h5 className="card-description">{post.title}</h5>
        </div>
      ))}
    </div>
  );
}
