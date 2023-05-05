import React from 'react';

function Card(props) {
  return (
    <article className={`card ${props.isSmall && 'card_size_small'}`} onClick={props.onChange}>
      <img
        src={props.image}
        alt={props.description}
        className={`card__image
          ${props.isHorizontal && 'card__image_orientation_horizontal'}
          ${props.isSmall && 'card__image_size_small'}`
        }
      />
      <div className='card__container'>
        <p className='card__description'>{props.description}</p>
      </div>
    </article>
  );
}

export default Card;
