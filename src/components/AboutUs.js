import React from 'react';

function AboutUs(props) {
  return (
    <section className='about-us'>
      <h2 className='title title_size_medium'>{props.title}</h2>
      <ul className='about-us__texts list'>
        {props.texts.map((text, index) => (
          <li className="about-us__item" key={index}>
            <p className='about-us__text'>{text}</p>
          </li>
        ))}
      </ul>
      <img src={props.image} alt='Команда Под потолком' className='about-us__image' />
    </section>
  );
}

export default AboutUs;
