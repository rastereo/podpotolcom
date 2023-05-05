import React from 'react';

function Presentation(props) {
  return (
    <section className='presentation'>
      <h1 className='title title_size_large'>{props.title}</h1>
      <p className='presentation_description'>{props.description}</p>
      <a href='#connect' className='presentation__scroll-button link'>{props.buttonName}</a>
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt='Кровать-чердак на кухне'
          className='presentation__image'
        />
      ))}
    </section>
  );
}

export default Presentation;
