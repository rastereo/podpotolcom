import React from 'react';
import CountUp from 'react-countup';

function Achievement({ title, numbers, feats }) {
  return (
    <section className="achievement">
      <h2 className="title title_size_medium">{title}</h2>
      <ul className="achievement_numbers list">
        {numbers.map((number, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <h3 className="achievement__number">
              <CountUp
                end={number.number}
                enableScrollSpy
                duration={15}
              />
              {number.number === '200' && '+'}
            </h3>
            <p className="achievement__text">{number.description}</p>
          </li>
        ))}
      </ul>
      <ul className="achievement__list list">
        {feats.map((feat, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="achievement__item">
            <h3 className="achievement__promise">{feat.title}</h3>
            <p className="achievement__description">{feat.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievement;
