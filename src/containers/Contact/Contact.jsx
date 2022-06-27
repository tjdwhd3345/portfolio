import React from 'react';
import styles from './Contact.module.scss';
import { BsEnvelope } from 'react-icons/bs';
import { SiGithub, SiNotion } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Contact = () => {
  return (
    <section className={styles.container}>
      <span>이 사이트는 React, Sass, Vercel 등을 사용하여 만들었습니다.</span>
      <ul>
        <li className={styles.list}>
          <BsEnvelope />
          <span>E-mail</span>
          <span>tjdwhd3345@naver.com</span>
        </li>
        <li className={styles.list}>
          <SiGithub />
          <span>Github</span>
          <a
            href='https://github.com/tjdwhd3345'
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/tjdwhd3345 <HiOutlineExternalLink />
          </a>
        </li>
        <li className={styles.list}>
          <SiNotion />
          <span>Notion</span>
          <a
            href='https://moccci.notion.site/Mo-Sung-Jong-b47a012047f04fcf8930ec99961c10de'
            target='_blank'
            rel='noreferrer'
          >
            https://moccci.notion.site
            <HiOutlineExternalLink />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
