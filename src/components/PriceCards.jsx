import React from 'react';

function PriceCards({ prices, rules }) {
  return (
    <section className="price">
      {prices.map((card, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <article key={index} className="price__card">
          <h2 className="price__title">{card.title}</h2>
          <ul className="price__sizes list">
            {card.sizes.map((size, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i}>
                <p className="price__size">{size}</p>
              </li>
            ))}
          </ul>
          <ul className="price__options list">
            {card.options.map((option, e) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={e}>
                <p className="price__option">{option}</p>
              </li>
            ))}
          </ul>
          {card.optionsPlus
            && (
              <ul className="price__options list">
                {card.optionsPlus.map((option, a) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={a}>
                    <p className="price__option">{option}</p>
                  </li>
                ))}
              </ul>
            )}
        </article>
      ))}
      {rules
        && (
        <div className="price__rules">
          <h2 className="price__rules-title">{rules.title}</h2>
          {rules.texts.map((text, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index} className="price__text">{text}</p>
          ))}
        </div>
        )}
    </section>
  );
}

export default PriceCards;
