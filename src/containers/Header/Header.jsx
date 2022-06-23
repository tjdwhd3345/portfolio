import React, { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [navItem] = useState(['', 'About', 'Projects', 'Contact']);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Mo</h1>
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
