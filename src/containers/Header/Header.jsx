import React, { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [navItem] = useState(['', 'About', 'Projects', 'Contact']);
  const [isScroll, setIsScroll] = useState(false);
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
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          {navItem.map((item, i) => (
            <li key={i} className={styles.navitem}>
              <NavLink
                exact='true'
                to={item.toLowerCase()}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {item ? item : 'Home'}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
