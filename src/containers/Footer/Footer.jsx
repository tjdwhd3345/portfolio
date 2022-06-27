import React from 'react';
import { SiGithub, SiNotion } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <span>Designed and Developed By Mo Sung Jong, 2022</span>
      </div>
      <div className={styles.link}>
        <ul>
          <li
            name='github'
            className='github'
            onClick={() =>
              window.open('https://github.com/tjdwhd3345', '_blank')
            }
          >
            <SiGithub />
          </li>
          <li
            name='notion'
            className='notion'
            onClick={() =>
              window.open(
                'https://moccci.notion.site/Mo-Sung-Jong-b47a012047f04fcf8930ec99961c10de',
                '_blank'
              )
            }
          >
            <SiNotion />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
