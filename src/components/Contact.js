import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
  return (
    <section className='contact'>
      <img src={props.image} alt='Семейное фото' className='contact__photo' />
      <ul className='contact__list list'>
        {props.info.map((item, index) => (
          <li key={index}>
            <h3 className='contact__title'>{item.title}</h3>
            {item.describe &&
              <p className='contact__description'>{item.describe}</p>
            }
            {item.social &&
              <ul className='social-links social-link_size_small list'>
                {item.social.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.url}
                      target='_blank'
                      rel='noreferrer'
                      className={`social-links__logo link ${item.class}`}>
                    </Link>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
