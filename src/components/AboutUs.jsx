import React from 'react';

function AboutUs({ title, texts, image }) {
  return (
    <section className="about-us">
      <h2 className="title title_size_medium">{title}</h2>
      <ul className="about-us__texts list">
        {texts.map((text, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="about-us__item" key={index}>
            <p className="about-us__text">{text}</p>
          </li>
        ))}
      </ul>
      <img
        src={image}
        alt="Команда Под потолком"
        className="about-us__image"
      />
    </section>
  );
}

export default AboutUs;
