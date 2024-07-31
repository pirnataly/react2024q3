import React from 'react';
import { CardProps } from '../interfaces/types';

export default function Cards(props: CardProps) {
  const { photos, headingText, showModal, setSearchParams, params } = props;
  if (params.get('detail')) {
    params.delete('detail');
  }
  const currentSearch = Array.from(params.entries());

  return (
    <div
      role="button"
      tabIndex={0}
      className="cards-container"
      onClick={() => true}
      onKeyDown={() => true}
    >
      {photos.map((photoCard) => (
        <div
          className="results-card"
          key={photoCard.id}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={async () => {
            showModal(true);
            currentSearch.push(['detail', photoCard.id]);
            setSearchParams(new URLSearchParams(currentSearch));
          }}
        >
          <div className="results-card__image">
            <img
              src={photoCard.url_l}
              className="results-card__image"
              alt={headingText ?? 'photo'}
            />
          </div>
          <h5 className="card-description">{photoCard.title}</h5>
        </div>
      ))}
    </div>
  );
}
