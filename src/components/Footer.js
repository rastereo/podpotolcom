import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <Link
          to='tel:79031396791'
          className='footer__phone link'
        >
          +7 903 139-67-91
        </Link>
        <Link
          to='mailto:podpotolcom@yandex.ru'
          className='footer__email link'
        >
          podpotolcom@yandex.ru
        </Link>
        <ul className='social-links list'>
          <li>
            <Link
              to='https://vk.com/podpotolcom'
              target='_blank'
              rel='noreferrer'
              className='social-links__logo social-links__logo_name_vk link'
            ></Link>
          </li>
          <li>
            <Link
              to='https://ok.ru/podpotolcom'
              target='_blank'
              rel='noreferrer'
              className='social-links__logo social-links__logo_name_ok link'
            ></Link>
          </li>
          <li>
            <Link
              to='https://t.me/podpotolkom'
              target='_blank'
              rel='noreferrer'
              className='social-links__logo social-links__logo_name_telegram link'
            ></Link>
          </li>
          <li>
            <Link
              to='https://api.whatsapp.com/send/?phone=79031396791'
              target='_blank'
              rel='noreferrer'
              className='social-links__logo social-links__logo_name_whatsapp link'
            ></Link>
          </li>
          <li>
            <Link
              to='https://dzen.ru/id/62418a6b08a9cd7376eb2f2b?utm_referer=podpotol.com'
              target='_blank'
              rel='noreferrer'
              className='social-links__logo social-links__logo_name_dzen link'
            ></Link>
          </li>
        </ul>
      </div>
      <div className='footer__sponsor'>
        <h3 className='footer__title'>Мы являемся участниками программы</h3>
        <Link
          to='https://сделановмоскве.рф/'
          target='_blank'
          rel='noreferrer'
          className='footer__logo-moscow link'
        ></Link>
      </div>
    </footer>
  );
}

export default Footer;
