import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const setActiveLink = ({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'link link_active' : 'link';
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize',(evt) => setWidthWindow(evt.target.innerWidth));
  })

  return (
    <header className='header header_border_none'>
      <NavLink
        to='/'
        className='header__logo link'
      ></NavLink>
      <nav>
        <ul className='header__menu list'>
          <li>
            <NavLink
              to='/price'
              className={setActiveLink}
            >Цены</NavLink>
          </li>
          <li>
            <div className='dropdown'>
              <button type='button' className='dropdown__button'>Каталог</button>
              <ul className='dropdown__menu list'>
                <li>
                  <NavLink
                    to='/loft-bed-adult'
                    className={setActiveLink}
                  >Кровать-чердак взрослая</NavLink>
                </li>
                <li>
                  <NavLink
                    to='/loft-bed-children'
                    className={setActiveLink}
                  >Кровать-чердак детская</NavLink>
                </li>
                <li>
                  <NavLink
                    to='/bunk-bed'
                    className={setActiveLink}
                  >Двухъярусная кровать</NavLink>
                </li>
                <li>
                  <NavLink
                    to='/tables'
                    className={setActiveLink}
                  >Столы</NavLink>
                </li>
                <li>
                  <NavLink
                    to='/other'
                    className={setActiveLink}
                  >Другая мебель</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to='/contacts'
              className={setActiveLink}
            >Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
