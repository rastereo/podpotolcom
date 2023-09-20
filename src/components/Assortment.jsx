import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';

function Assortment({
  isFlex,
  beds,
  handleClickCard,
  title,
  description,
}) {
  return (
    <section className="assortment">
      {isFlex
        ? (
          <div className="assortment__container assortment__container_display_flex">
            {beds.map((bed, index) => (
              <Card
                isSmall
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                image={bed.cover}
                description={bed.name}
                onChange={() => handleClickCard(bed)}
              />
            ))}
          </div>
        )
        : (
          <>
            <h2 className="title title_size_medium">{title}</h2>
            <div className="assortment__container">
              <p className="assortment__text">{description}</p>
              {beds.map((bed, index) => (
                <NavLink
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  to={bed.link}
                  className="assortment__bed link"
                >
                  <Card
                    image={bed.cover}
                    description={bed.name}
                  />
                </NavLink>
              ))}
            </div>
          </>
        )}
    </section>
  );
}

export default Assortment;
