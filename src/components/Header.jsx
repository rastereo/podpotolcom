import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const mobileWindowWidth = 450;

  // eslint-disable-next-line no-nested-ternary
  const setActiveLink = ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'link link_active' : 'link');

  function hideMain(open) {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    setWindowWidth(window.innerWidth);

    if (windowWidth < mobileWindowWidth && open) {
      main.classList.remove('main_hide');

      setOpen(false);
    } else if (!open) {
      main.classList.add('main_hide');
      footer.classList.add('main_hide');
    } else {
      main.classList.remove('main_hide');
      footer.classList.remove('main_hide');
    }
  }

  useEffect(() => {
    window.addEventListener('resize', hideMain);

    return () => {
      window.removeEventListener('resize', hideMain);
    };
  });

  return (
    <header
      className={`header ${isOpen && 'header_fix'}`}
    >
      <NavLink
        to="/"
        className="header__logo link"
        onClick={() => {
          setOpen(false);
          hideMain(true);
        }}
      />
      <Hamburger
        toggled={isOpen}
        toggle={() => {
          setOpen(!isOpen);
          hideMain(isOpen);
        }}
        size={windowWidth > mobileWindowWidth ? 44 : 20}
        direction="right"
      />
      <nav className={`header__navigation ${isOpen && 'header__navigation_active'}`}>
        <ul className="header__menu list">
          {isOpen
            ? (
              <>
                <li>
                  <NavLink
                    to="/loft-bed-adult"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Кровать-чердак взрослая
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/loft-bed-children"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Кровать-чердак детская
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bunk-bed"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Двухъярусная кровать
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tables"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Столы
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/other"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Другая мебель
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/price"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Цены
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacts"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Контакты
                  </NavLink>
                </li>
              </>
            )
            : (
              <>
                <li>
                  <NavLink
                    to="/price"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Цены
                  </NavLink>
                </li>
                <li>
                  <div className="dropdown">
                    <button type="button" className="dropdown__button">Каталог</button>
                    <ul className="dropdown__menu list">
                      <li>
                        <NavLink
                          to="/loft-bed-adult"
                          className={setActiveLink}
                          onClick={() => setOpen(false)}
                        >
                          Кровать-чердак взрослая
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/loft-bed-children"
                          className={setActiveLink}
                          onClick={() => setOpen(false)}
                        >
                          Кровать-чердак детская
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/bunk-bed"
                          className={setActiveLink}
                          onClick={() => setOpen(false)}
                        >
                          Двухъярусная кровать
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/tables"
                          className={setActiveLink}
                          onClick={() => setOpen(false)}
                        >
                          Столы
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/other"
                          className={setActiveLink}
                          onClick={() => setOpen(false)}
                        >
                          Другая мебель
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/contacts"
                    className={setActiveLink}
                    onClick={() => setOpen(false)}
                  >
                    Контакты
                  </NavLink>
                </li>
              </>
            )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
