import React from 'react';
import CountUp from 'react-countup';

function Achievement(props) {
  return (
    <section className='achievement'>
      <h2 className='title title_size_medium'>{props.title}</h2>
      <ul className='achievement_numbers list'>
        {props.numbers.map((number, index) => (
          <li key={index}>
            <h3 className='achievement__number'>
              <CountUp
                end={number.number}
                enableScrollSpy={true}
                scrollSpyDelay={-35}
                duration={15}
                scrollSpyOnce={true}
              />
              {number.number === '200' && '+'}
            </h3>
            <p className='achievement__text'>{number.description}</p>
          </li>
        ))}
      </ul>
      <ul className='achievement__list list'>
        {props.feats.map((feat, index) => (
        <li key={index} className='achievement__item'>
          <h3 className='achievement__promise'>{feat.title}</h3>
          <p className='achievement__description'>{feat.description}</p>
        </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievement;
