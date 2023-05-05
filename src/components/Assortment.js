import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';

function Assortment(props) {
  return (
    <section className='assortment'>
      {props.isFlex
        ? <div className='assortment__container assortment__container_display_flex'>
          {props.beds.map((bed, index) => (
            <Card
              isSmall
              key={index}
              image={bed.cover}
              description={bed.name}
              onChange={() => props.handleClickCard(bed)}
            />
          ))}
        </div>
        : <>
          <h2 className='title title_size_medium'>{props.title}</h2>
          <div className='assortment__container'>
            <p className='assortment__text'>{props.description}</p>
            {props.beds.map((bed, index) => (
              <NavLink
                key={index}
                to={bed.link}
                className='assortment__bed link'
              >
                <Card
                  image={bed.cover}
                  description={bed.name}
                />
              </NavLink>
            ))}
          </div>
        </>
      }
    </section>
  );
}

export default Assortment;
