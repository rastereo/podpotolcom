import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  function handleContactButton() {
    setIsOpen(!isOpen);

    setIsClick(true);
  }

  return (
    <div className="contact-menu">
      <button
        type="button"
        className={`contact-menu__button ${isOpen && 'contact-menu__button_active'}`}
        onClick={handleContactButton}
      >
      </button>
      <div
        className={`contact-menu__container ${isOpen && isClick ? 'contact-menu__container_open' : 'contact-menu__container_hide'}`}
      >
        <h3 className="contact-menu__title">Напишите нам!</h3>
        <ul className="social-links social-link_position_fix list">
          <li>
            <Link
              to="https://t.me/podpotolkom"
              target="_blank"
              rel="noreferrer"
              className="social-links__logo social-links__logo_type_fixed social-links__logo_name_telegram link"
            />
          </li>
          <li>
            <Link
              to="https://api.whatsapp.com/send/?phone=79031396791"
              target="_blank"
              rel="noreferrer"
              className="social-links__logo social-links__logo_type_fixed social-links__logo_name_whatsapp link"
            />
          </li>
          <li>
            <Link
              to="tel:79031396791"
              className="social-links__logo social-links__logo_type_fixed social-links__logo_name_phone link"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMenu;
