import React from 'react';

function TitleBlock(props) {
  return (
    <section className={`title-block ${props.isGrid && 'title-block_padding-bottom_large'}`}>
      <h1 className='title title_size_medium'>{props.title}</h1>
      {props.isGrid
        ? <div className='title-block__grid'>
          <p className='title-block__description title-block__description_position_grid'>
            {props.description}
          </p>
          {props.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Фото ${props.title}`}
              className='title-block__image'
            />
          ))}
        </div>
        : <p className={'title-block__description'}>{props.description}</p>
      }
    </section>
  );
}

export default TitleBlock;
