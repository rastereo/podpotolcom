import React from 'react';

function Presentation({
  title,
  description,
  buttonName,
  images,
}) {
  return (
    <section className="presentation">
      <h1 className="title title_size_large">{title}</h1>
      <p className="presentation_description">{description}</p>
      <a href="#connect" className="presentation__scroll-button link">{buttonName}</a>
      {images.map((image, index) => (
        <img
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          src={image}
          alt="Кровать-чердак на кухне"
          className="presentation__image"
        />
      ))}
    </section>
  );
}

export default Presentation;
