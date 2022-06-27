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

const Item = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className={styles.itemTitle}>
        <img src={`/icons/${item.iconUrl}`} alt={`${item.name} icon`} />
        <p>{item.name}</p>
      </div>
      {isActive && (
        <div className={styles.itemDesc}>
          {item.descs.map((desc, i) => (
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
          return <Item item={skill} key={i} />;
        })}
      </div>
    </section>
  );
});

const Interest = memo(({ interests }) => {
  return (
    <section className={styles.interest}>
      <h2>Interest</h2>
      <div className={styles.container}>
        {interests.map((interest, i) => {
          return <Item item={interest} key={i} />;
        })}
      </div>
    </section>
  );
});

const About = () => {
  const [skills] = useState([
    {
      name: 'HTML',
      iconUrl: 'html5.svg',
      descs: [
        '시멘틱 태그를 활용한 의미있는 페이지',
        '웹표준과 웹접근성을 준수하는 페이지',
        '크로스 브라우징',
      ],
    },
    {
      name: 'CSS',
      iconUrl: 'css3.svg',
      descs: [
        'PostCSS, Sass와 같은 CSS 전처리기를 사용',
        '미디어쿼리를 사용한 반응형CSS',
      ],
    },
    {
      name: 'JavaScript',
      iconUrl: 'js.svg',
      descs: [
        'ES6+의 구문을 사용가능',
        'Promise, async/await 구현',
        '이벤트루프와 자바스크립트의 동작 이해',
        'React, Vue와 같은 모던 라이브러리에 대한 이해',
        'javascript로 코딩테스트 응시 가능',
      ],
    },
    {
      name: 'React',
      iconUrl: 'react.svg',
      descs: [
        '함수형 컴포넌트',
        'Life-Cycle과 Hooks',
        'React-Router을 사용한 클라이언트 라우팅',
      ],
    },
    {
      name: 'MaraiDB',
      iconUrl: 'mariadb.svg',
      descs: [
        '기본적인 CRUD 쿼리문을 작성할 수 있습니다',
        '조건식과 JOIN을 활용한 SubQuery를 작성할 수 있습니다',
      ],
    },
    {
      name: ' MySQL',
      iconUrl: 'mysql.svg',
      descs: [
        '기본적인 CRUD 쿼리문을 작성할 수 있습니다',
        '조건식과 JOIN을 활용한 SubQuery를 작성할 수 있습니다',
      ],
    },
    {
      name: 'Firebase',
      iconUrl: 'firebase.svg',
      descs: [
        'Firebase에서 제공되는 기능을 사용할 수 있습니다',
        'Authentication, Real-time Database를 활용해 인증, 실시간DB를 할 수 있습니다',
      ],
    },
    {
      name: 'Git, Github',
      iconUrl: 'git.svg',
      descs: [
        'git을 사용해 소스코드 형상관리를 할 수 있습니다',
        'branch를 구분해 프로젝트 별 소스를 관리할 수 있습니다',
      ],
    },
    {
      name: 'Vercel',
      iconUrl: 'vercel.svg',
      descs: ['소스를 Git과 연동하여 서버에 배포할 수 있습니다'],
    },
    {
      name: 'Jira',
      iconUrl: 'jira.svg',
      descs: ['Jira를 활용한 이슈관리와 협업이 가능합니다'],
    },
    {
      name: 'Confluence',
      iconUrl: 'confluence.svg',
      descs: ['Confluence를 활용한 Wiki 작성과 협업이 가능합니다'],
    },
    {
      name: 'Notion',
      iconUrl: 'notion.svg',
      descs: [
        'Notion으로 문서작성과 팀협업을 할 수 있습니다',
        '데이터베이스 테이블로 Kanban보드형 일정관리를 할 수 있습니다',
      ],
    },
  ]);
  const [interests] = useState([
    {
      name: 'TypeScript',
      iconUrl: 'typescript.svg',
      descs: [
        'React와 가장 많이 사용되는 FE언어로써 관심이 있습니다',
        'Interface와 Types, Generic에 대해 학습하고 있습니다',
      ],
    },
    {
      name: 'Node',
      iconUrl: 'nodejs.svg',
      descs: ['MERN스택으로써 서버구성하는 것에 관심이 있습니다'],
    },
    {
      name: 'Express',
      iconUrl: 'express.svg',
      descs: ['MERN스택으로써 서버구성하는 것에 관심이 있습니다'],
    },
    {
      name: 'Python',
      iconUrl: 'python.svg',
      descs: [
        '백엔드 관리 언어로 관심이 있습니다',
        '코딩테스트 언어로 관심이 있습니다',
        '취미로 Selenium과 함께 사용해 로컬에서 예매자동화 프로그램을 만들어본 경험이 있습니다',
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
