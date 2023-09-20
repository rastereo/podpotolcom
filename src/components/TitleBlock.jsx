import React from 'react';

function TitleBlock({
  isGrid,
  title,
  description,
  images,
}) {
  return (
    <section className={`title-block ${isGrid && 'title-block_padding-bottom_large'}`}>
      <h1 className="title title_size_medium">{title}</h1>
      {isGrid
        ? (
          <div className="title-block__grid">
            <p className="title-block__description title-block__description_position_grid">
              {description}
            </p>
            {images.map((image, index) => (
              <img
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                src={image}
                alt={`Фото ${title}`}
                className="title-block__image"
              />
            ))}
          </div>
        )
        : (
          <p className="title-block__description">{description}</p>
        )}
    </section>
  );
}

export default TitleBlock;
