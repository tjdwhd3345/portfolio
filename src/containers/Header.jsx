import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const navItem = ['Home', 'About', 'Projects', 'Contact'];
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Mo</h1>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          {navItem.map((item) => (
            <li className={styles.navitem}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
