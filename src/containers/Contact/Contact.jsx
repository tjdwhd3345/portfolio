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
          <div>
            <BsEnvelope />
            <span>E-mail</span>
          </div>
          <div>
            <span>tjdwhd3345@naver.com</span>
          </div>
        </li>
        <li className={styles.list}>
          <div>
            <SiGithub />
            <span>Github</span>
          </div>
          <div>
            <a
              href='https://github.com/tjdwhd3345'
              target='_blank'
              rel='noreferrer'
            >
              https://github.com/tjdwhd3345 <HiOutlineExternalLink />
            </a>
          </div>
        </li>
        <li className={styles.list}>
          <div>
            <SiNotion />
            <span>Notion</span>
          </div>
          <div>
            <a
              href='https://moccci.notion.site/Mo-Sung-Jong-b47a012047f04fcf8930ec99961c10de'
              target='_blank'
              rel='noreferrer'
            >
              https://moccci.notion.site
              <HiOutlineExternalLink />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
