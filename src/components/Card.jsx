/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Card({
  isSmall,
  onChange,
  image,
  description,
  isHorizontal,
}) {
  return (
    <article
      onClick={onChange}
      className={`card ${isSmall && 'card_size_small'}`}
    >
      <img
        src={image}
        alt={description}
        className={`card__image
          ${isHorizontal && 'card__image_orientation_horizontal'}
          ${isSmall && 'card__image_size_small'}`}
      />
      <div className="card__container">
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}

export default Card;
