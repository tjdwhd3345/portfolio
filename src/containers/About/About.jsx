import React, { useState, memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './About.module.scss';

const Introduce = memo(() => {
  return (
    <section className={styles.introduce}>
      <div className={styles.self}>
        <p className={styles.hello}>안녕하세요!🙋‍♂️</p>
        <p className={styles.subTitle}>
          상대방의 이야기에 귀를 잘 기울이며, 사용자의 입장을 생각하는
          프론트엔드 개발자 모성종입니다.
        </p>
        <p>
          꾸준한 성장을 모토로 새로운 도전을 두려워하지않고 배움을 멈추지
          않습니다.
        </p>
        <p>
          UI솔루션 엔지니어로 시작해서 현재 프론트엔드 개발자로서 나아가고자
          합니다.
        </p>
        <p>
          3년간 UI솔루션 엔지니어로서의 경험에서 터득한 웹 개발지식과 책임감,
          협력을 기반으로 웹 프론트엔드를 개발합니다.
        </p>
      </div>
      <div className={styles.image}>
        <img src='/profile.jpg' alt='profile' />
      </div>
    </section>
  );
});

const SkillItem = ({ skill }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className={styles.itemTitle}>
        <img src={`/icons/${skill.iconUrl}`} alt={`${skill.name} icon`} />
        <p>{skill.name}</p>
      </div>
      {isActive && (
        <div className={styles.itemDesc}>
          {skill.descs.map((desc, i) => (
            <p key={i}>
              <FaCheck />
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const SkillSet = memo(({ skills }) => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.container}>
        {skills.map((skill, i) => {
          return <SkillItem skill={skill} key={i} />;
        })}
      </div>
    </section>
  );
});

const InterestItem = ({ interest }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className={styles.itemTitle}>
        <img src={`/icons/${interest.iconUrl}`} alt={`${interest.name} icon`} />
        <p>{interest.name}</p>
      </div>
      {isActive && (
        <div className={styles.itemDesc}>
          {interest.descs.map((desc, i) => (
            <p key={i}>
              <FaCheck />
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Interest = ({ interests }) => {
  return (
    <section className={styles.interest}>
      <h2>Interest</h2>
      <div className={styles.container}>
        {interests.map((interest, i) => {
          return <InterestItem interest={interest} key={i} />;
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
      name: 'MaraiDB / MySQL',
      iconUrl: 'mariadb.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'Git, Github',
      iconUrl: 'git.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'Vercel',
      iconUrl: 'vercel.svg',
      descs: ['이것저것할 수 있습니다'],
    },
    {
      name: 'Jira / Confluence',
      iconUrl: 'confluence.svg',
      descs: ['Jira, Confluence 협업가능'],
    },
    {
      name: 'Notion',
      iconUrl: 'notion.svg',
      descs: ['Notion으로 협업가능'],
    },
  ]);
  const [interests] = useState([
    {
      name: 'TypeScript',
      iconUrl: 'typescript.svg',
      descs: ['이것저것 배우고있습니다'],
    },
    {
      name: 'Node',
      iconUrl: 'nodejs.svg',
      descs: ['이것저것 배우고있습니다'],
    },
    {
      name: 'Express',
      iconUrl: 'express.svg',
      descs: ['이것저것 배우고있습니다'],
    },
    {
      name: 'Python',
      iconUrl: 'python.svg',
      descs: [
        '3f23f23f',
        'sdgbsdgb',
        'sel2345y다ㄴㅇㅀㄴㅇㅀㄴㅇㅎㄹ',
        'selensdfsdfsdffffffffffffffffffffffffffffffffffffsdfasdf awef 23r',
      ],
    },
  ]);
  return (
    <>
      <Introduce />
      <SkillSet skills={skills} />
      <Interest interests={interests} />
    </>
  );
};

export default About;
