import React, { useState } from 'react';
import styles from './About.module.scss';

const Introduce = () => {
  return (
    <section className={styles.introduce}>
      <div className={styles.self}>
        <p>
          꾸준한 성장을 모토로 새로운 도전을 두려워하지않고 배움을 멈추지
          않습니다.
        </p>
        <p>
          UI솔루션 엔지니어로 시작해서 현재 프론트엔드 개발자로서 나아가고자
          합니다.
        </p>
        <p>
          3년간 UI솔루션 엔지니어로서의 경험에서 웹 개발지식과 책임감, 협력을
          기반으로 웹 프론트엔드를 개발합니다.
        </p>
      </div>
      <div className={styles.image}>
        <img src='/profile.jpg' alt='' />
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  const [isActive, setIsActive] = useState(false);

  const itemClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div
      className={`${styles.skillItem} ${isActive ? styles.active : ''}`}
      onClick={itemClick}
    >
      <div className={styles.itemTitle}>
        <img src={`/icons/${skill.iconUrl}`} alt={`${skill.name} icon`} />
        <p>{skill.name}</p>
      </div>
      {/* {isActive && ( */}
      <div className={styles.itemDesc}>
        {skill.descs.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

const SkillSet = ({ skills }) => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillContainer}>
        {skills.map((skill, i) => {
          return <SkillItem skill={skill} key={i} />;
        })}
      </div>
    </section>
  );
};

const About = () => {
  const [skills] = useState([
    {
      name: 'HTML',
      iconUrl: 'html5.svg',
      descs: [
        '이것저것할 수 있습니다1',
        '이것저것할 수 있습니다2',
        '이것저것할 수 있습니다3',
      ],
    },
    {
      name: 'CSS',
      iconUrl: 'css3.svg',
      descs: ['이것저것할 수 있습니다', '이것도 할 수 있습니다'],
    },
    {
      name: 'JavaScript',
      iconUrl: 'js.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'React',
      iconUrl: 'react.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'Git, Github',
      iconUrl: 'git.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'MaraiDB/MySQL',
      iconUrl: 'mariadb.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'Vercel',
      iconUrl: 'vercel.svg',
      descs: ['이것저것할 수 있습니다'],
    },
  ]);
  return (
    <>
      <Introduce />
      <SkillSet skills={skills} />
    </>
  );
};

export default About;
