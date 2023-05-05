import React from 'react';

function PriceCards(props) {
  return (
    <section className='price'>
      {props.prices.map((card, index) => (
        <article key={index} className='price__card'>
          <h2 className='price__title'>{card.title}</h2>
          <ul className='price__sizes list'>
            {card.sizes.map((size, index) => (
              <li key={index}>
                <p className='price__size'>{size}</p>
              </li>
            ))}
          </ul>
          <ul className='price__options list'>
            {card.options.map((option, index) => (
              <li key={index}>
                <p className='price__option'>{option}</p>
              </li>
            ))}
          </ul>
          {card.optionsPlus &&
            <ul className='price__options list'>
              {card.optionsPlus.map((option, index) => (
                <li key={index}>
                  <p className='price__option'>{option}</p>
                </li>
              ))}
            </ul>
          }
        </article>
      ))}
      {props.rules &&
        <div className='price__rules'>
          <h2 className='price__rules-title'>{props.rules.title}</h2>
          {props.rules.texts.map((text, index) => (
            <p key={index} className='price__text'>{text}</p>
          ))}
        </div>
      }
    </section>
  );
}

export default PriceCards;
