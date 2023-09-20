/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';

function Contact({ image, info }) {
  return (
    <section className="contact">
      <img src={image} alt="Семейное фото" className="contact__photo" />
      <ul className="contact__list list">
        {info.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <h3 className="contact__title">{item.title}</h3>
            {item.describe && <p className="contact__description">{item.describe}</p>}
            {item.social
              && (
                <ul className="social-links social-link_size_small list">
                  {item.social.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`social-links__logo link ${item.class}`}
                      />
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
