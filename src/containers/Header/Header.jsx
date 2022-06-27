import React, { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { IoMenu, IoClose } from 'react-icons/io5';

const Header = () => {
  const [navItem] = useState(['', 'About', 'Projects', 'Contact']);
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const SCROLL_Y = 55;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_Y) setIsScroll(true);
      else setIsScroll(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScroll ? styles.blur : ''}`}>
      <div className={styles.logo}>
        <NavLink to={'avatar'}>
          <img src='/logo.png' alt='logo' />
        </NavLink>
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navlist}>
          {navItem.map((item, i) => (
            <li key={i} className={styles.navitem}>
              <NavLink
                exact='true'
                to={item.toLowerCase()}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                {item ? item : 'Home'}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {!isOpen && <IoMenu onClick={() => setIsOpen(true)} />}
      {isOpen && <IoClose onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default memo(Header);
