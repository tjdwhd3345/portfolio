import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { BsDot } from 'react-icons/bs';

const Careers = ({ careers }) => {
  return (
    <section className={styles.careers}>
      <h2>Careers</h2>
      {careers.map((career, i) => (
        <div key={i}>
          <div className={styles.company}>
            <h3>{career.company}</h3>
            <span>{career.duration}</span>
          </div>
          <div className={styles.description}>
            <p>{career.position}</p>
            <p>담당업무: {career.jobDesc}</p>
            <ul>
              {career.jobMessage.map((msg, i) => (
                <li key={i}>
                  <BsDot />
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

const Projects = () => {
  const [careers] = useState([
    {
      company: '애버커스',
      duration: '2021. 07. 26 ~ 2021. 11. 25',
      position: 'IT품질혁신팀 / 사원(프리랜서)',
      jobDesc: 'LG U+ 데일리 리포트 관제시스템 개발',
      jobMessage: ['WebSquare, MariaDB, Devon', 'WebSquare를 사용해서 UI'],
    },
    {
      company: '인스웨이브시스템즈',
      duration: '2018. 02. 01 ~ 2021. 06. 30',
      position: '기술지원팀 / 사원',
      jobDesc: 'UI솔루션 기술지원 엔지니어',
      jobMessage: [
        'HTML5, ES5 기반 UI솔루션 ‘WebSquare’을 사용한 프로젝트의 UI기술지원',
        '공공기관(방위사업청, 한국무역보험공사 등), 금융권, 기업 등 다수 프로젝트의 솔루션 기술지원',
        '솔루션을 웹 애플리케이션 상에 설치부터 성능개선, 접근성 등',
      ],
    },
  ]);
  const [projects] = useState([
    {
      imgUrl: '',
      title: 'Habit Tracker',
      desc: 'React를 사용한 간단한 Todo List 앱입니다',
      github: 'https://github.com/tjdwhd3345/habit-tracker',
      demo: 'https://tjdwhd3345.github.io/habit-tracker/',
    },
    {
      imgUrl: '',
      title: 'MoTube',
      desc: 'React를 사용한 간단한 Todo List 앱입니다',
      github: 'https://tjdwhd3345.github.io/motube/',
      demo: 'https://tjdwhd3345.github.io/motube/',
    },
    {
      imgUrl: '',
      title: 'Business Card Maker',
      desc: 'React를 사용한 간단한 Todo List 앱입니다',
      github: 'https://github.com/tjdwhd3345/business-card-maker',
      demo: 'https://tjdwhd3345.github.io/business-card-maker/',
    },
  ]);
  return (
    <div className={styles.container}>
      <Careers careers={careers} />
      <section className={styles.projects}>
        <h2>Projects</h2>
        {projects.map((project, i) => (
          <div className={styles.wrap}>
            <img src={project.imgUrl} alt='project sample' />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.desc}</p>
            <a href={project.github} className={styles.btn}>
              Github
            </a>
            <a href={project.demo} className={styles.btn}>
              Demo
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
